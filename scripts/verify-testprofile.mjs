/**
 * Verify this package end to end against a locally installed DSH, through a
 * dedicated profile.
 *
 * This is the local counterpart of the opt-in five-root loader suite in
 * `tests/loader-composition.test.ts`. That suite pins five official DSH
 * checkouts and is what the publish workflow runs; a developer working against
 * one DSH installation — the checkout `pnpm dsh` boots from — needs a path that
 * installs the built package into a profile of the running DSH home and checks
 * the same causal chain: the Loader entry mounts, the Host applies and publishes
 * its settings section, the Web host serves the Client bundle, and the writes
 * this plugin exists for land on that host's settings model.
 *
 * Nothing here is mocked: the profile is a real one under the DSH home, and the
 * package under test is installed by the DSH CLI itself, so a rebuild is picked
 * up by the next run.
 *
 * Usage:
 *   node scripts/verify-testprofile.mjs [--dsh-root <dir>] [--profile <name>] [--spec <spec>]
 *
 * `--dsh-root` is the DSH checkout to boot (defaults to `DSH_CLI_ROOT`, else a
 * `dsh` on PATH). `--profile` is the profile to install into and boot (defaults
 * to `testprofile`). `--spec` is the package spec to install (defaults to this
 * working tree, so the run verifies uncommitted edits); pass a published spec —
 * `github:<owner>/<repo>`, `@hytime/dsh-thinking-effort@0.4.0` — to verify that
 * exact artifact instead. The profile is created from the shipped Web template
 * when absent and is left installed afterwards; `dsh plugin --profile <name>
 * remove` is the documented way to undo that.
 */
import { spawn, spawnSync } from 'node:child_process';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const PACKAGE_NAME = '@hytime/dsh-thinking-effort';
const ENTRY_ID = 'thinking-effort';
const HOST_SECTION = 'llm-pi-ai';
const DEFAULT_LEVELS = { off: null, high: 'high', max: 'max' };
const PLUGIN_FORM_FIELDS = ['autoBackup', 'opencodeSession', 'profiles', 'subagentEffort'];
const MARKER_FILE = 'thinking-effort-loaded.json';
const scriptRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/** Every assertion this run made, so a late failure still reports its context. */
const checks = [];

function check(name, ok, detail) {
  checks.push({ name, ok });
  console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${name}${detail === undefined ? '' : ` — ${detail}`}`);
  if (!ok) throw new Error(`check failed: ${name}${detail === undefined ? '' : ` (${detail})`}`);
}

/**
 * Parse the command line. `DSH_CLI_ROOT` seeds the DSH root so a checkout can be
 * pointed at once from the environment instead of on every run.
 * @param args - arguments after the Node binary and script.
 * @returns the resolved options, with an absolute DSH root when one was given.
 * @throws when an option is unknown or a flag is missing its value, which would
 * otherwise resolve to a profile or root named `undefined`.
 */
export function parseArgs(args) {
  const options = { profile: 'testprofile', dshRoot: process.env.DSH_CLI_ROOT, spec: undefined };
  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (argument === '--dsh-root') {
      const value = args[++index];
      if (value === undefined || value === '') throw new Error('--dsh-root requires a directory');
      options.dshRoot = value;
    } else if (argument === '--profile') {
      const value = args[++index];
      if (value === undefined || value === '') throw new Error('--profile requires a name');
      options.profile = value;
    } else if (argument === '--spec') {
      const value = args[++index];
      if (value === undefined || value === '') throw new Error('--spec requires a package spec');
      options.spec = value;
    } else {
      throw new Error(`unknown option: ${argument}`);
    }
  }
  if (options.dshRoot === undefined || options.dshRoot === '') options.dshRoot = undefined;
  else options.dshRoot = resolve(options.dshRoot);
  return options;
}

/**
 * How to run the DSH CLI. A checkout is booted through its own built entry, which
 * needs no shell; a `dsh` on PATH is a `.cmd` shim on Windows, which Node refuses
 * to launch without one.
 */
function launcher(options) {
  if (options.dshRoot === undefined) {
    return { command: 'dsh', prefix: [], shell: process.platform === 'win32' };
  }
  const entry = join(options.dshRoot, 'apps', 'cli', 'lib', 'bin.js');
  if (!existsSync(entry)) {
    throw new Error(`--dsh-root has no built CLI entry: ${entry} (build that checkout first)`);
  }
  return { command: process.execPath, prefix: [entry], shell: false };
}

function dshEnv(home) {
  return { ...process.env, DSH_HOME: home, DSH_TELEMETRY_DISABLED: '1' };
}

/** Run one CLI command to completion and return its combined output. */
function runDsh(options, home, args) {
  const { command, prefix, shell } = launcher(options);
  const result = spawnSync(command, [...prefix, ...args], {
    env: dshEnv(home),
    encoding: 'utf8',
    shell,
    cwd: options.dshRoot ?? process.cwd(),
  });
  const output = `${result.stdout ?? ''}${result.stderr ?? ''}`;
  if (result.error !== undefined || result.status !== 0) {
    throw new Error(`dsh ${args.join(' ')} failed (${result.status ?? result.error?.code})\n${output}`);
  }
  return output;
}

/** Start the Web app on an ephemeral port and resolve its launch URL. */
function startWeb(options, home) {
  const { command, prefix, shell } = launcher(options);
  const child = spawn(command, [...prefix, '--profile', options.profile, '--no-open', '--port', '0'], {
    env: dshEnv(home),
    cwd: options.dshRoot ?? process.cwd(),
    shell,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  let output = '';
  let announced = false;
  const url = new Promise((resolveUrl, rejectUrl) => {
    const timer = setTimeout(() => {
      if (!announced) rejectUrl(new Error(`timed out waiting for the DSH Web URL\n${output}`));
    }, 60000);
    const consume = (chunk) => {
      output += chunk.toString();
      const match = output.match(/https?:\/\/127\.0\.0\.1:\d+(?:\/\?token=[^\s]+)?/);
      if (match !== null && !announced) {
        announced = true;
        clearTimeout(timer);
        resolveUrl(match[0]);
      }
    };
    child.stdout.on('data', consume);
    child.stderr.on('data', consume);
    child.once('error', (error) => {
      if (!announced) rejectUrl(error);
    });
    child.once('exit', (code, signal) => {
      if (!announced) rejectUrl(new Error(`DSH Web exited before announcing a URL (code=${code}, signal=${signal})\n${output}`));
    });
  });

  const stop = async () => {
    if (child.exitCode === null && child.signalCode === null) child.kill('SIGTERM');
    const deadline = Date.now() + 10000;
    while (child.exitCode === null && child.signalCode === null && Date.now() < deadline) {
      await new Promise((resolveWait) => setTimeout(resolveWait, 100));
    }
    if (child.exitCode === null && child.signalCode === null) child.kill('SIGKILL');
  };

  return { child, url, stop };
}

/** Exchange the launch token for the session cookie the API expects. */
async function openSession(launchUrl) {
  const base = new URL(launchUrl);
  let cookie = '';
  if (base.searchParams.has('token')) {
    const launch = await fetch(launchUrl, { redirect: 'manual', signal: AbortSignal.timeout(10000) });
    if (launch.status !== 303) throw new Error(`token exchange failed with HTTP ${launch.status}`);
    const setCookie = launch.headers.get('set-cookie');
    if (setCookie === null) throw new Error('token exchange set no session cookie');
    cookie = setCookie.split(';', 1)[0];
    base.search = '';
  }
  return { base, cookie };
}

async function rpc(base, cookie, endpoint, args) {
  const response = await fetch(new URL(`/api/${endpoint}`, base), {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...(cookie === '' ? {} : { cookie }) },
    body: JSON.stringify({
      type: 'client-request',
      rpcId: `verify-${endpoint.replaceAll('/', '-')}-${Date.now()}`,
      method: endpoint,
      payload: { args },
    }),
    signal: AbortSignal.timeout(20000),
  });
  const body = await response.json();
  return body?.result ?? body;
}

async function describeSections(base, cookie) {
  const described = await rpc(base, cookie, 'settings/describe', {});
  if (described?.ok !== true) throw new Error(`settings/describe refused: ${JSON.stringify(described?.error)}`);
  return described;
}

const sectionOf = (described, ns) => described?.value?.namespaces?.find((row) => row.ns === ns);

/**
 * The published form field names of one section, sorted. `describe` publishes
 * each form as `toJSON()`, whose `{ uid, refs }` envelope puts the root node at
 * `refs[String(uid)]` rather than at the top level.
 * @param schema - the `schema` field of one described section.
 * @returns the root form's field names, or an empty list when there is no form.
 */
export function formFields(schema) {
  const root = schema?.refs?.[String(schema?.uid)] ?? schema;
  const dict = root?.dict;
  return typeof dict === 'object' && dict !== null ? Object.keys(dict).sort() : [];
}

/**
 * Read the `__DSH_BOOT__` graph the Web host injects into its page.
 * @param html - the served Web page.
 * @returns the graph entries the page advertises.
 * @throws when the page carries no usable injection, which would otherwise read
 * as "the plugin is not installed" rather than "the host changed its page".
 */
export function bootEntries(html) {
  const prefixes = ['<script>globalThis["__DSH_BOOT__"] = ', '<script>window.__DSH_BOOT__ = '];
  const prefix = prefixes.find((candidate) => html.includes(candidate));
  if (prefix === undefined) throw new Error('the Web page did not inject __DSH_BOOT__');
  const start = html.indexOf(prefix) + prefix.length;
  const end = html.indexOf('</script>', start);
  if (end === -1) throw new Error('the Web page has an unterminated __DSH_BOOT__ injection');
  return JSON.parse(html.slice(start, end)).entries ?? [];
}

/** Wait for the Host's provider-defaults fill to reach the user layer. */
async function waitForFill(base, cookie, route, timeoutMs = 20000) {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    const described = await describeSections(base, cookie);
    const models = sectionOf(described, HOST_SECTION)?.user?.providers?.[route]?.models;
    if (Array.isArray(models) && models[0]?.reasoningEfforts !== undefined) return models;
    if (Date.now() > deadline) throw new Error(`timed out after ${timeoutMs}ms waiting for the provider-defaults fill`);
    await new Promise((resolveWait) => setTimeout(resolveWait, 250));
  }
}

/**
 * Create the profile when it is absent. A custom name has no shipped template,
 * and `dsh plugin` alone would initialize it with the base bundle — which has no
 * Web host, so the Client half of this verification could not run.
 */
function ensureProfile(options, home, profileManifest) {
  if (!existsSync(profileManifest)) {
    runDsh(options, home, ['--profile', options.profile, '--from-default-profile', 'web', '--dump-config']);
  }
  runDsh(options, home, ['plugin', '--profile', options.profile, 'add', options.spec ?? scriptRoot]);
}

/**
 * Run the whole verification.
 * @param args - command-line arguments; see the header for the flags.
 * @returns the number of checks that passed.
 */
export async function runVerification(args = process.argv.slice(2)) {
  checks.length = 0;
  const options = parseArgs(args);
  const home = process.env.DSH_HOME ?? join(homedir(), '.dsh');
  const profileManifest = join(home, 'profiles', options.profile, 'package.json');
  const subject = options.spec ?? 'this working tree';
  console.log(`verify ${PACKAGE_NAME} (${subject}) on profile "${options.profile}"${options.dshRoot === undefined ? '' : ` (DSH root ${options.dshRoot})`}`);

  const hostEntry = join(scriptRoot, 'lib', 'index.js');
  const clientEntry = join(scriptRoot, 'lib', 'client.js');
  check('built Host entry', existsSync(hostEntry), hostEntry);
  check('built Client entry', existsSync(clientEntry), clientEntry);

  ensureProfile(options, home, profileManifest);
  const manifest = JSON.parse(readFileSync(profileManifest, 'utf8'));
  const dependency = manifest.dependencies?.[PACKAGE_NAME];
  const normalized = typeof dependency === 'string' ? dependency.replaceAll('\\', '/').toLowerCase() : '';
  check(
    options.spec === undefined ? 'profile installs this working tree' : `profile installed ${options.spec}`,
    options.spec === undefined
      ? normalized.endsWith(scriptRoot.replaceAll('\\', '/').toLowerCase())
      : normalized.includes(options.spec.toLowerCase()),
    dependency,
  );
  check(
    'profile composes the plugin bundle',
    (manifest.dsh?.profile?.bundles ?? []).includes(PACKAGE_NAME),
    JSON.stringify(manifest.dsh?.profile?.bundles),
  );

  // What the DSH CLI actually put on disk, which is the artifact under test: a
  // git install ships no build of its own, so the runtime entries have to be
  // committed for the plugin to activate.
  const installedDir = join(home, 'profiles', options.profile, 'node_modules', PACKAGE_NAME);
  for (const entry of ['index.js', 'client.js']) {
    check(`installed package ships lib/${entry}`, existsSync(join(installedDir, 'lib', entry)), join(installedDir, 'lib', entry));
  }

  const startedAt = Date.now();
  const web = startWeb(options, home);
  try {
    const { base, cookie } = await openSession(await web.url);
    const headers = cookie === '' ? {} : { cookie };
    console.log(`  ..  dsh web ${base.href}`);

    // The Host applied: `apply()` rewrites the marker on every mount, so a file
    // that predates this launch cannot satisfy the check.
    const markerPath = join(home, MARKER_FILE);
    check('Host apply marker', existsSync(markerPath), markerPath);
    const marker = JSON.parse(readFileSync(markerPath, 'utf8'));
    check('marker names this plugin', marker.name === PACKAGE_NAME && marker.event === 'apply', JSON.stringify(marker));
    check('marker came from this launch', Date.parse(marker.at) >= startedAt - 5000, `${marker.at} (launched ${new Date(startedAt).toISOString()})`);

    // The Client is served to the page the Loader builds.
    const page = await fetch(base.href, { headers, signal: AbortSignal.timeout(15000) });
    check('Web page served', page.status === 200, `HTTP ${page.status}`);
    const entries = bootEntries(await page.text());
    const bootEntry = entries.find((entry) => entry.id === PACKAGE_NAME);
    check('boot graph advertises the Client bundle', bootEntry !== undefined, `${entries.length} entries`);
    check('Client inject list is complete', Array.isArray(bootEntry?.inject) && bootEntry.inject.length === 4, JSON.stringify(bootEntry?.inject));
    const bundle = await fetch(new URL(bootEntry.url, base.href), { headers, signal: AbortSignal.timeout(15000) });
    const servedCode = await bundle.text();
    check('Client bundle served', bundle.status === 200 && servedCode.length > 0, `HTTP ${bundle.status}, ${servedCode.length} bytes`);
    check('served bundle is this plugin', servedCode.includes(`id: '${PACKAGE_NAME}'`), `lib/client.js is ${statSync(clientEntry).size} bytes`);

    // Both settings sections the plugin works with are published by this host.
    const described = await describeSections(base, cookie);
    const hostSection = sectionOf(described, HOST_SECTION);
    check(`${HOST_SECTION} section published`, hostSection !== undefined);
    check(
      `${HOST_SECTION} exposes the providers form`,
      formFields(hostSection?.schema).includes('providers'),
      JSON.stringify(formFields(hostSection?.schema)),
    );
    const ownSection = sectionOf(described, ENTRY_ID);
    check(`${ENTRY_ID} section published by its Loader entry id`, ownSection !== undefined);
    check(
      `${ENTRY_ID} form matches the exported Config`,
      JSON.stringify(formFields(ownSection?.schema)) === JSON.stringify(PLUGIN_FORM_FIELDS),
      JSON.stringify(formFields(ownSection?.schema)),
    );

    // Feature 1: a hand-declared model without `reasoningEfforts` gets the
    // default level set, written into the user's own layer alone.
    const route = `verify-${Date.now()}`;
    const seeded = { api: 'openai-completions', baseURL: 'http://gateway.test/v1', models: [{ id: 'verify-model' }] };
    const seedResult = await rpc(base, cookie, 'settings/mutate', {
      ns: HOST_SECTION,
      ops: [{ op: 'set', path: ['providers', route], value: seeded }],
      expectedRevision: hostSection?.revision,
    });
    check('seeded a hand-declared provider', seedResult?.ok === true, JSON.stringify(seedResult?.error));
    const models = await waitForFill(base, cookie, route);
    check(
      'fill wrote the default levels',
      JSON.stringify(models[0]?.reasoningEfforts) === JSON.stringify(DEFAULT_LEVELS),
      JSON.stringify(models),
    );
    check(
      'fill pinned no resolved field',
      JSON.stringify(models[0]) === JSON.stringify({ ...seeded.models[0], reasoningEfforts: DEFAULT_LEVELS }),
      JSON.stringify(models[0]),
    );

    // Feature 2: the plugin's own section is writable under the entry-config
    // model, and a minimal write stays minimal in the user layer while the
    // resolved value keeps the defaults the user never wrote.
    const ownBefore = sectionOf(await describeSections(base, cookie), ENTRY_ID);
    const ownWrite = await rpc(base, cookie, 'settings/mutate', {
      ns: ENTRY_ID,
      ops: [{ op: 'set', path: ['subagentEffort'], value: 'high' }],
      expectedRevision: ownBefore?.revision,
    });
    check(`${ENTRY_ID} accepts a subagent default`, ownWrite?.ok === true, JSON.stringify(ownWrite?.error));
    const ownAfter = sectionOf(await describeSections(base, cookie), ENTRY_ID);
    check(
      'subagent default reached the user layer alone',
      JSON.stringify(ownAfter?.user) === JSON.stringify({ subagentEffort: 'high' }),
      JSON.stringify(ownAfter?.user),
    );
    check(
      'resolved section keeps its untouched defaults',
      ownAfter?.value?.subagentEffort === 'high' && ownAfter?.value?.opencodeSession !== undefined,
    );

    // Leave no configuration behind: both writes above are undone. The settings
    // service may keep an empty row for an entry whose fields were all unset,
    // which carries no value and is what the profile patch looks like after the
    // same edits made by hand in the settings page.
    await rpc(base, cookie, 'settings/mutate', {
      ns: ENTRY_ID,
      ops: [{ op: 'unset', path: ['subagentEffort'] }],
      expectedRevision: ownAfter?.revision,
    });
    const hostAfter = sectionOf(await describeSections(base, cookie), HOST_SECTION);
    await rpc(base, cookie, 'settings/mutate', {
      ns: HOST_SECTION,
      ops: [{ op: 'unset', path: ['providers', route] }],
      expectedRevision: hostAfter?.revision,
    });
  } finally {
    await web.stop();
  }

  console.log(`\nPASS: ${checks.length} checks against profile "${options.profile}"${options.spec === undefined ? '' : ` for ${options.spec}`}`);
  return checks.length;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    await runVerification();
  } catch (error) {
    console.error(`\nFAIL: ${error instanceof Error ? error.message : String(error)}`);
    console.error(`${checks.filter(({ ok }) => ok).length}/${checks.length} checks passed before the failure`);
    process.exitCode = 1;
  }
}
