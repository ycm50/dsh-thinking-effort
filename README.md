# dsh-thinking-effort — 上游插件的本机适配副本

## 源仓库

- 上游仓库：[hytime/dsh-thinking-effort](https://github.com/hytime/dsh-thinking-effort)（npm 包：`@hytime/dsh-thinking-effort`），MIT 许可。
- 本副本：上游 `main` 的 `0.4.0` 发布提交（`967846a`），运行时行为未做任何改动。
- 它是什么：[DSH（DeepSeek Harness）](https://github.com/deepseek-ai/deepseek-harness) 插件。Host 入口 `lib/index.js`，Web 客户端入口 `lib/client.js`，Loader 组合条目 `thinking-effort`（`cordis.patch.yml`）。
- 上游文档——兼容范围、安装步骤、变更日志——见 [docs/INSTALL.zh.md](docs/INSTALL.zh.md) 与 [docs/CHANGELOG.md](docs/CHANGELOG.md)，本 README 不再重复。

## 本副本改了什么

插件运行时行为没有任何改动：Host、Client 以及 `tests/` 下的全部测试都是上游的。以下改动只做两件事——让本仓库在**这台机器**（Windows + `pnpm dsh` 启动的那份 DSH 检出）上可验证，以及补一条可重复的验证通路。

1. **`.gitattributes`（新增）**——`* text=auto eol=lf`，二进制资产单独固定。
   Windows 上 git 默认 `core.autocrlf=true`，会把所有跟踪文档检出为 CRLF，直接打挂 `tests/loader-composition.test.ts` 里按精确文本比对的文档契约（10 条断言失败）。现在跟踪的文本文件在索引和工作区都是 LF，内容与上游逐字节一致。

2. **`tests/loader-composition.test.ts`**——两处 Windows 适配。
   - `official DSH web startup cleanup` 不再假定 POSIX 信号。Windows 不投递 `SIGTERM`：`child.kill('SIGTERM')` 直接终止进程，子进程自己的 handler 不会写下 `stopped`。现在按平台各自能表达的形式断言同一保证——POSIX 断言记录了 `stopped`，Windows 断言进程 id 已不存在——而不是跳过检查。唯一依赖子进程继承 stdio 的 `close` 等待用例在 Windows 上跳过，并写明原因。
   - 兼容性文档契约不再约束 README（本仓库只保留这一份中文 README）；`docs/INSTALL*.md` 与各变更日志仍承担完整契约。

3. **`scripts/verify-testprofile.mjs`（新增）**——针对本地 DSH 的可重复端到端验证，是那套需 5 个官方 root 的 loader 套件的本地对应物。它创建或复用 `testprofile`，用 DSH 官方 `dsh plugin` 命令把待验证的包装进该 profile（默认是**当前工作区**，故未提交的改动也会被验证），用临时端口起 DSH Web，然后逐项断言：安装到磁盘的包确实带 `lib/index.js` 与 `lib/client.js`、Loader 条目挂载、`apply` 标记由本次启动写入、boot 图声明了客户端 bundle 且 host 真的伺服了它、`llm-pi-ai` 与 `thinking-effort` 两个 settings section 按预期表单发布、手写模型只在用户层拿到默认思考档位、插件自身 `subagentEffort` 写入落盘且解析正确；退出前撤销自己的两处写入。

   ```bash
   npm run build
   npm run test:testprofile -- --dsh-root <dsh-checkout>   # 或设置 DSH_CLI_ROOT=<dsh-checkout>
   # 验证已发布的产物本身，而不是工作区：
   npm run test:testprofile -- --dsh-root <dsh-checkout> --spec github:ycm50/dsh-thinking-effort
   ```

4. **`scripts/verify-testprofile.test.mjs`（新增）**——用 `node --test` 覆盖该脚本依赖的三处解码：命令行参数、settings 表单的 `toJSON` 信封、`__DSH_BOOT__` 图。

5. **`package.json`**——新增 `test:testprofile` 脚本，把新测试文件纳入 `test:release`，并因只保留一份 README 而收窄发布的 `files` 列表。

6. **`lib/` 随仓库提交、`.gitignore` 相应调整**——本副本提交 `lib/index.js`、`lib/client.js` 与 `lib/types/**/*.d.ts`（即 `package.json` 的发布子集）；`lib/types/` 下 `tsc` 产出的中间 JavaScript、source map 与复制过来的 locale JSON 仍不跟踪。原因：DSH 可以直接从 git 安装插件，而 git 安装不会为插件执行构建，缺 `lib/` 的仓库装进去只会「编译通过但不激活」。改动源码后需重新 `npm run build` 再提交。

7. **README**——四个语言版本合并为这一份中文 README；`docs/INSTALL*.md` 里的 README 链接同步改为指向本文档。
