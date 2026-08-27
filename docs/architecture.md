---
title: BoatHarness architecture
status: current
last_updated: 2026-08-27
authority: runtime-architecture
---

# BoatHarness architecture

## Monorepo

BoatHarness uses Bun workspaces and Turborepo:

- `apps/desktop`: Electron desktop application;
- `apps/server`: Hono backend used only for browser-mode development;
- `packages/ui`: shared React UI components;
- `packages/configconv`: configuration conversion library;
- `packages/configconv-cli`: command-line wrapper.

## Electron trust boundary

```text
renderer (Chromium, untrusted UI input)
        |
        | typed, validated preload API
        v
preload (minimal contextBridge surface)
        |
        | validated IPC, sender and frame checks
        v
main (filesystem, subprocesses, credentials, networking)
```

Renderer code must not import Node.js modules or receive raw provider credentials. Privileged IPC
requires runtime payload validation in addition to TypeScript types. External navigation and main
process network requests require explicit policy.

## Product-unified, engine-isolated model

```text
                         BoatHarness shell
                projects / navigation / settings / UI
                         /                 \
                        /                   \
       OpenCode Agent engine          AgentCore CEO engine
       HTTP + global SSE              NDJSON/JSON-RPC over stdio
       OpenCode sessions              AgentCore invocation/session identity
       OpenCode host lifecycle        independent sidecar lifecycle
       OpenCode event reducer         journal + deterministic fold
```

The engines may share product concepts and presentation components, but they do not share session IDs,
HTTP ports, lockfiles, event streams, cancellation state, recovery state, or subprocess ownership.
Engine-specific state is projected into a common shell through explicit adapters.

## OpenCode baseline

The ordinary Agent path owns the existing managed OpenCode lifecycle, discovery, SDK clients,
`/global/event` stream, sessions, permissions, questions, resolved model selection, abort, review,
automations, and worktrees. Browser mode routes the renderer service layer to `apps/server`; Electron
mode routes it through `window.palot`.

Any change from one managed server to per-project servers requires a separate architecture decision and
must reconcile discovery, client construction, event fan-in, tray, automation, settings, lockfile,
reattachment, authentication, and shutdown behavior.

## AgentCore target

AgentCore runs as an independent stdio sidecar started and owned by Electron main. The production path
must define:

- a versioned handshake and RPC/event contract;
- process discovery, packaged executable/runtime location, startup, cancellation, crash, and shutdown;
- one durable authority for invocation events and recovery;
- deterministic fold/hydration into renderer projections;
- explicit hot, cold, and stage interaction semantics;
- provider policy that keeps credentials in main/sidecar memory;
- installed-package smoke tests for each supported platform.

A Python process launched from a development checkout is not packaged-product evidence.

## State authority

Each fact must have one writer and one durable authority. Renderer atoms and query caches are
projections, not authorities. Before AgentCore WIP is reintroduced, an ADR must choose how sidecar
journal, Electron persistence, session index, outbox, and paused-run state reconcile.

## Compatibility surfaces

`@palot/*` workspace names, `window.palot`, application IDs, and existing XDG `palot` paths are retained
temporarily to avoid breaking imports, IPC consumers, updates, and user data. A later rename requires a
migration and rollback plan.
