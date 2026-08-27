# BoatHarness

BoatHarness is an Electron desktop workspace for AI-assisted software development. The current
product is built around OpenCode; an AgentCore-powered CEO mode is being evaluated as an independent
engine behind the same desktop shell.

> **Development status:** BoatHarness is not yet published as a supported release. Build and runtime
> claims in this repository apply only to the revisions and platforms named in
> [the status page](docs/status.md).

## Product boundary

BoatHarness provides one desktop product with two deliberately separate engine paths:

- **Agent mode:** the existing OpenCode HTTP/SSE lifecycle, sessions, permissions, questions, models,
  abort flow, review tools, automations, and worktrees.
- **CEO mode:** a planned AgentCore stdio sidecar. It must not share OpenCode sessions, HTTP ports,
  lockfiles, event streams, or server lifecycle.

The target is a shared shell, project workspace, settings surface, and local index—not a shared engine
state model. See [product scope](docs/product.md) and [architecture](docs/architecture.md).

## Repository layout

```text
apps/
  desktop/       Electron main, preload, and React renderer
  server/        Browser-mode development backend; not bundled with Electron
packages/
  ui/            Shared UI components
  configconv/    Agent configuration conversion library
  configconv-cli/CLI wrapper for configconv
reference-project/
  AgentCore/     Pinned upstream reference submodule
```

Internal package names, the `window.palot` preload API, and existing `palot` storage paths are retained
as compatibility interfaces. They do not define the product brand and must not be renamed without a
migration plan.

## Development

Prerequisites:

- [Bun](https://bun.sh/) 1.3.8
- [OpenCode](https://opencode.ai/) for ordinary Agent runtime testing
- Git submodule support

```bash
git clone --recurse-submodules <repository-url>
cd BoatHarness
bun install --frozen-lockfile

# Electron development
bun run dev:desktop

# Browser-only renderer development (run apps/server separately)
bun run dev:web
```

The repository's publication URL is not documented until a release channel is approved. Use the URL
provided by the project owner in place of `<repository-url>`.

## Quality gates

```bash
bun run lint
bun run check-types
bun run test
bun run build
```

A passing unit test does not prove runtime, packaged, or manual acceptance. Evidence levels and
clean-checkout requirements are defined in
[docs/contributing/verification.md](docs/contributing/verification.md).

## Project documentation

[docs/README.md](docs/README.md) is the authority map. In particular:

- [docs/status.md](docs/status.md) is the only current status page.
- [docs/roadmap.md](docs/roadmap.md) defines stage gates.
- [docs/decisions/](docs/decisions/) contains one decision per ADR.
- [docs/tasks/active/](docs/tasks/active/) contains the current authorized work.

Historical observations are not current requirements or authorization.

## Security

Never commit provider credentials, local runtime databases, logs, evidence sandboxes, or decrypted
secrets. The renderer must not receive raw provider credentials. AgentCore process separation is an
operational boundary, not an operating-system sandbox.

Report security issues privately to the project owner until a public security contact is established.

## Upstream acknowledgements

BoatHarness is derived from the open-source Palot desktop client and preserves its MIT license and
third-party notices. It integrates [OpenCode](https://github.com/opencode-ai/opencode) through the
OpenCode SDK and studies [AgentCore](https://github.com/Lawofall/AgentCore) through a pinned reference
submodule. See [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).

## License

[MIT](LICENSE)
