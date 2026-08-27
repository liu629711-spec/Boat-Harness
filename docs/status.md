---
title: BoatHarness current status
status: current
last_updated: 2026-08-27
authority: project-status
---

# Current status

## Active gate

**G0 Repository Baseline — in progress.** No G1–G6 implementation is authorized by this status.

## Baseline

- Governance branch: `chore/repository-governance`, created from `7095620`.
- Local WIP rescue branch: `backup/pre-governance-2026-08-27`.
- Rescue commit: `525197d` (`chore: checkpoint pre-governance WIP`).
- Git-boundary commit: `d1f7c0a` (`chore: harden repository ignore boundaries`).
- No governance commit has been pushed by this work.

## G0 checklist

| Item | State | Evidence or blocker |
|---|---|---|
| Protect pre-governance source and tests | complete | Local rescue commit `525197d`; generated databases and logs excluded |
| Stop `.gitignore` from hiding product AgentCore source | complete | Product path is not ignored; root generated indexes remain ignored |
| Remove reviewed local tool state and generated indexes | complete | Explicit path removal after local SHA-256 inventory |
| Pin AgentCore reference submodule | in progress | Existing snapshot has remote metadata but no valid HEAD; exact upstream revision must be proven |
| Establish authoritative documentation | in progress | New product, architecture, status, ADR, task and verification structure being added |
| Add root/Turbo/CI test gates | pending | Current root has no `test` script |
| Verify frozen clean checkout | pending | Run after all G0 commits |
| Verify Windows package | pending | Run after build gate succeeds |
| Verify ordinary Agent runtime | pending | G0 records source baseline; full behavioral protection belongs to G1 |

## Isolated WIP

The rescue branch contains four coupled work areas that are not part of the governance baseline:

1. per-project managed OpenCode/host-isolation changes;
2. AgentCore persistence, journal, sidecar and Electron bridge changes;
3. CEO renderer projection/sidebar prototypes;
4. three database migrations and local evidence harnesses.

Known review concerns include incomplete client/event fan-in for per-project OpenCode servers, mixed
state authorities, development-only sidecar paths, and a probe exposed through product UI. These areas
must return as separately reviewed vertical slices.

## Evidence state

A prior dirty-worktree test observation is preserved in
[`history/prototype-observation-2026-08-27.md`](history/prototype-observation-2026-08-27.md). It is not
evidence for this governance branch. Current lint, typecheck, test, build, package, and runtime results
remain `NOT RUN` until recorded here by revision.

## Current blockers

- Exact provenance of the local AgentCore snapshot is unresolved.
- Clean-checkout and package verification have not run.
- Ordinary Agent dynamic regression has not run and cannot be inferred from AgentCore probes.
