---
title: BoatHarness product scope
status: current
last_updated: 2026-08-27
authority: product-scope
---

# BoatHarness product scope

## Product intent

BoatHarness is one local-first desktop workspace for directing, observing, and reviewing AI-assisted
software work. It should let a user move between ordinary coding-agent sessions and higher-level
AgentCore orchestration without learning two separate desktop products.

Product unity means shared navigation, projects, settings, visual language, file workspace, and local
indexing. It does not mean merging engine identities or protocols.

## Current product baseline

The baseline on the governance branch is the existing OpenCode-based desktop application:

- an Electron main/preload/renderer boundary;
- an OpenCode host and SDK integration using HTTP and global SSE;
- project and session navigation, prompts, models, permissions, questions, abort, and review surfaces;
- automation and worktree code paths;
- a browser-only development mode backed by `apps/server`;
- shared UI and configuration-conversion workspaces.

These are source-level scope statements, not a claim that every path has passed runtime or packaged
acceptance on the current revision. The evidence status is maintained in `status.md`.

## Target CEO mode

CEO mode is a planned AgentCore stdio sidecar integrated through Electron main and preload. A complete
vertical slice must include a real user route, session creation, streamed events, cancellation,
durable state, fold/hydration, terminal settlement, reload/recovery, and visible error handling.

Later slices may migrate AgentCore conversation timelines, worker execution, run details, graphs, file
workspaces, browser surfaces, and interaction handling. Each surface is accepted separately from its
protocol or unit tests.

## Explicitly outside the local product boundary

The local migration does not promise AgentCore hosted-server, account, ticket, cloud-history,
cloud-writeback, mobile, Unity, or other platform-specific upstream products. A user-configured remote
or private inference provider may still be required; “local desktop” is not a promise of offline model
execution.

Upstream experimental, development-only, or incomplete paths are not silently promoted into the
BoatHarness roadmap. They receive an explicit coverage disposition before a release gate closes.

## Product invariants

- Ordinary Agent mode must remain usable while CEO mode is introduced.
- A visible feature needs a real engine event source; static mock UI is not product completion.
- Durable engine facts must survive reload through one declared authority and deterministic fold.
- Captain, worker, tool-result, interaction, and final-answer semantics remain distinguishable.
- Provider credentials do not cross into the renderer.
- The sidecar process boundary is not an operating-system security sandbox.
- Accessibility, external navigation policy, failure recovery, and packaging are product behavior—not
  post-release cleanup.

## Release exclusions until proven

No release claim may include a capability that is `pending`, `unknown`, untested in its required
runtime, absent from the installed package, or dependent on an unpinned reference revision.
