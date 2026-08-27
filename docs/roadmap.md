---
title: BoatHarness stage gates
status: current
last_updated: 2026-08-27
authority: roadmap
---

# BoatHarness stage gates

Gates are sequential. Completing a mechanism in a later gate does not waive an earlier gate.

| Gate | Outcome | Minimum exit condition |
|---|---|---|
| G0 Repository Baseline | Recoverable, reproducible repository | WIP backup, clean Git boundaries, pinned reference, authoritative docs, CI and clean-checkout verification |
| G1 Ordinary Agent Protection | OpenCode behavior protected | Architecture decision plus runtime regression for discovery, sessions, streaming, permission/question, abort, restart, automation and settings |
| G2 Sidecar Distribution | AgentCore starts from installed app | Versioned contract, bundled runtime/resources, lifecycle recovery, credential boundary and platform package smoke |
| G3 Recoverable CEO Vertical | One real CEO turn works end to end | User route, session, prompt, stream, durable journal, fold, terminal state, cancel, reload and crash recovery |
| G4 Interaction Parity | User decisions are recoverable | Approved interaction allowlist with hot/cold/stage state machines and duplicate/restart coverage |
| G5 Product Surfaces | AgentCore experience is migrated | Timeline, workers, run detail, graph, workspace and other approved surfaces accepted as independent vertical slices |
| G6 Release | Supported product | Security review, migrations, update path, supported-platform packaging, accessibility and independent manual acceptance |

## Gate policy

- Only the active task authorizes implementation.
- A gate cannot close with an unhandled `pending` or `unknown` capability in its scope.
- Unit, runtime, packaged, and manual evidence are recorded separately.
- AgentCore source changes require a reference manifest update and member-level coverage diff.
- Ordinary Agent regressions block CEO feature expansion.
