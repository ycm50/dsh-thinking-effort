/**
 * Unit coverage for the parts of `verify-testprofile.mjs` that read a DSH
 * response rather than a file: the command line, the published settings form,
 * and the `__DSH_BOOT__` graph. The rest of that script needs a running DSH and
 * is exercised by `npm run test:testprofile`; these three decode shapes the
 * verification would otherwise misread as "the plugin is not installed" when a
 * host changes them.
 */
import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';

import { bootEntries, formFields, parseArgs } from './verify-testprofile.mjs';

const bootScript = (payload) => `<html><body><script>globalThis["__DSH_BOOT__"] = ${JSON.stringify(payload)}</script></body></html>`;

test('parseArgs defaults to the testprofile, an unset DSH root and the working tree', () => {
  const previous = process.env.DSH_CLI_ROOT;
  delete process.env.DSH_CLI_ROOT;
  try {
    assert.deepEqual(parseArgs([]), { profile: 'testprofile', dshRoot: undefined, spec: undefined });
    assert.deepEqual(parseArgs(['--dsh-root', './dsh', '--profile', 'tst', '--spec', 'github:ycm50/dsh-thinking-effort']), {
      profile: 'tst',
      dshRoot: path.resolve('./dsh'),
      spec: 'github:ycm50/dsh-thinking-effort',
    });
  } finally {
    if (previous === undefined) delete process.env.DSH_CLI_ROOT;
    else process.env.DSH_CLI_ROOT = previous;
  }
});

test('parseArgs takes the DSH root from the environment and rejects unusable arguments', () => {
  const previous = process.env.DSH_CLI_ROOT;
  try {
    process.env.DSH_CLI_ROOT = './from-env';
    assert.equal(parseArgs([]).dshRoot, path.resolve('./from-env'));
    // An explicit flag wins, and an empty environment value falls back to a
    // `dsh` on PATH.
    assert.equal(parseArgs(['--dsh-root', './explicit']).dshRoot, path.resolve('./explicit'));
    process.env.DSH_CLI_ROOT = '';
    assert.equal(parseArgs([]).dshRoot, undefined);
    assert.throws(() => parseArgs(['--dsh-root']), /requires a directory/);
    assert.throws(() => parseArgs(['--dsh-root', '']), /requires a directory/);
    assert.throws(() => parseArgs(['--profile']), /requires a name/);
    assert.throws(() => parseArgs(['--profile', '']), /requires a name/);
    assert.throws(() => parseArgs(['--spec']), /requires a package spec/);
    assert.throws(() => parseArgs(['--spec', '']), /requires a package spec/);
    assert.throws(() => parseArgs(['extra']), /unknown option/);
  } finally {
    if (previous === undefined) delete process.env.DSH_CLI_ROOT;
    else process.env.DSH_CLI_ROOT = previous;
  }
});

test('formFields resolves the root form out of the toJSON envelope', () => {
  const schema = {
    uid: 2,
    refs: {
      1: { type: 'string' },
      2: { type: 'object', dict: { subagentEffort: 1, profiles: 1 } },
    },
  };
  assert.deepEqual(formFields(schema), ['profiles', 'subagentEffort']);
  // A root node without a dict, an absent schema, and a bare node all read as
  // "no form" rather than throwing.
  assert.deepEqual(formFields({ uid: 1, refs: { 1: { type: 'object' } } }), []);
  assert.deepEqual(formFields(undefined), []);
  assert.deepEqual(formFields({ dict: { providers: {} } }), ['providers']);
});

test('bootEntries reads both injection forms and rejects an unusable page', () => {
  const entries = [{ id: '@hytime/dsh-thinking-effort', url: 'plugins/x/client.js', inject: ['a'] }];
  assert.deepEqual(bootEntries(bootScript({ entries })), entries);
  assert.deepEqual(bootEntries(bootScript({})), []);
  assert.deepEqual(
    bootEntries('<script>window.__DSH_BOOT__ = {"entries":[{"id":"x"}]}</script>'),
    [{ id: 'x' }],
  );
  assert.throws(() => bootEntries('<html></html>'), /did not inject/);
  assert.throws(() => bootEntries('<script>globalThis["__DSH_BOOT__"] = {"entries":[]}'), /unterminated/);
});
