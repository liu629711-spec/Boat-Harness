# BoatHarness Agent Instructions

## Stable boundaries

- BoatHarness is the product brand. Existing `@palot/*` packages, `window.palot`, app IDs, and XDG
  `palot` paths are compatibility interfaces; do not rename them without an approved migration.
- `apps/desktop` is Electron: `main/` is Node.js, `preload/` is the IPC boundary, and `renderer/` is a
  Chromium sandbox. Never import Node.js modules into the renderer.
- Renderer hooks use `renderer/services/backend.ts`; do not bypass it with direct server imports.
- OpenCode Agent mode and AgentCore CEO mode are separate engines. They must not share sessions,
  transports, ports, lockfiles, event streams, credentials, or lifecycle state.
- AgentCore reference behavior comes only from the pinned `reference-project/AgentCore` submodule.
  Do not modify it without explicit authorization.

## Authorities

- `docs/product.md` defines product scope.
- `docs/architecture.md` defines runtime boundaries.
- `docs/status.md` is the only current project status.
- `docs/decisions/` contains accepted architectural decisions.
- `docs/tasks/active/` contains authorized implementation work.
- `docs/history/` records observations only; history never authorizes work.
- Source and repeatable runtime evidence outrank prose. Never promote a local observation to a product
  guarantee.

## Development rules

- Load `.agents/skills/react-best-practices` before changing renderer React code.
- Use Jotai for renderer state. Preserve the `@source "../components";` line in the shared Tailwind CSS.
- Use OpenCode v2 SDK types from `@opencode-ai/sdk/v2/client` and always pass a resolved model to
  `promptAsync`.
- Use `/global/event` for events across projects.
- Guard early preload access with `window.palot?.method()`.
- Deny in-window external navigation and open approved external schemes through Electron.
- Keep credentials in the main process, fail closed when secure storage is unavailable, validate
  privileged IPC senders and payloads, and apply an explicit outbound URL policy.
- Do not describe a sidecar process boundary as a security sandbox.

## Verification and hygiene

- Run `bun run lint`, `bun run check-types`, `bun run test`, and `bun run build` from the repository root.
- Regenerate browser-server types after changing routes in `apps/server`.
- Treat schema, SQL migration, and migration snapshot as one atomic change.
- A delivery reports tests, runtime evidence, packaged evidence, manual acceptance, unknowns, and
  exclusions separately. `NOT RUN` is not a pass.
- Never commit provider keys, `.zcode`, `.inscode`, local databases, logs, evidence sandboxes, generated
  indexes, or AgentCore runtime environments.
- Do not run broad `git clean` commands in a shared working tree. Inspect every deletion and preserve a
  recovery path first.
- Never push, publish, delete remote data, or modify `reference-project/` without explicit authorization.
