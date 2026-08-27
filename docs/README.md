---
title: BoatHarness documentation authority map
status: current
last_updated: 2026-08-27
authority: documentation-index
---

# Documentation authority map

This directory separates current facts, accepted decisions, active work, reference provenance, and
historical observations. When documents conflict, use the authority in this table.

| Question | Authoritative location |
|---|---|
| What product are we building? | [`product.md`](product.md) |
| How do the runtimes relate? | [`architecture.md`](architecture.md) |
| What is true now? | [`status.md`](status.md) |
| What gate comes next? | [`roadmap.md`](roadmap.md) |
| Why was an architectural choice made? | [`decisions/`](decisions/) |
| What work is currently authorized? | [`tasks/active/`](tasks/active/) |
| How is evidence classified? | [`contributing/verification.md`](contributing/verification.md) |
| Which AgentCore source is authoritative? | [`reference/agentcore/manifest.md`](reference/agentcore/manifest.md) |
| How is migration coverage measured? | [`reference/agentcore/coverage-model.md`](reference/agentcore/coverage-model.md) |

Implementation references such as [`chat-input-selectors.md`](chat-input-selectors.md) and
[`worktrees.md`](worktrees.md) explain current code paths but do not override product or architecture
decisions.

Files under `history/` are bounded observations. They do not describe current status, assign roles,
authorize implementation, or prove later revisions.

## Document rules

1. Dynamic status is written only in `status.md`.
2. Each accepted decision has one ADR. ADRs are immutable except for status and supersession links.
3. Each active gate has one task brief with scope, exclusions, evidence, and stop conditions.
4. Evidence records name the revision, environment, command or interaction, result, and limitations.
5. Counts copied by hand from an upstream codebase are not a coverage denominator.
6. A historical approval or developer report is not current acceptance.
