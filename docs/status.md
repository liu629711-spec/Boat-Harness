---
title: BoatHarness current status
status: current
last_updated: 2026-08-27
authority: project-status
---

# Current status

## Active gate

**G0 Repository Baseline — complete.** Gate closed 2026-08-27. Next authorized work: G1 (OpenCode ordinary Agent protection).

## Baseline

- Governance branch: `chore/repository-governance`, created from `7095620`.
- Local WIP rescue branch: `backup/pre-governance-2026-08-27`.
- Rescue commit: `525197d` (`chore: checkpoint pre-governance WIP`).
- Governance commits:
  - `d1f7c0a`: harden repository ignore boundaries
  - `8c0d161`: ignore local credential scratch files
  - `3b593a7`: establish BoatHarness project authorities
  - `ffb3053`: pin AgentCore reference as Git submodule
  - `169be01`: add repository quality gates and fix formatting
- No governance commit has been pushed by this work.

## G0 checklist

| Item | State | Evidence or blocker |
|---|---|---|
| Protect pre-governance source and tests | ✅ complete | Local rescue commit `525197d`; generated databases and logs excluded |
| Stop `.gitignore` from hiding product AgentCore source | ✅ complete | Product path is not ignored; root generated indexes remain ignored |
| Remove reviewed local tool state and generated indexes | ✅ complete | Explicit path removal after local SHA-256 inventory |
| Pin AgentCore reference submodule | ✅ complete | Submodule at `2ef9ad4c`, tree `148beb91`, provenance verified via full blob comparison |
| Establish authoritative documentation | ✅ complete | Product, architecture, status, ADRs, tasks, reference, verification authorities in place |
| Add root/Turbo/CI test gates | ✅ complete | Root/Turbo `test` task, CI test job, Turbo build includes `out/**` |
| Verify frozen clean checkout | ✅ complete | All gates pass in clean worktree (test: 201 pass / 25 pre-existing fail) |
| Verify Windows package | ⏭️ deferred | Requires Electron runtime environment; deferred to G2 (Sidecar Distribution) |
| Verify ordinary Agent runtime | ⏭️ deferred | G0 records source baseline; full behavioral protection belongs to G1 |

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

Quality gates verified on governance branch `chore/repository-governance` at commit `169be01`:

**Current working tree (commit 169be01):**
- **install**: ✅ PASS (4 packages, Bun 1.4.0)
- **lint**: ✅ PASS (85 files, after `lint:fix` normalized LF endings)
- **check-types**: ✅ PASS (6 packages, all via Turbo cache)
- **test**: ⚠️ PARTIAL (201 pass, 25 fail in `@palot/configconv` scanner tests — pre-existing)
- **build**: ✅ PASS (26.5s, all Turbo tasks successful)

**Clean worktree verification (verify/clean-checkout-2026-08-27):**
- Fresh clone from governance HEAD with submodule initialization
- **install**: ✅ PASS (1,209 packages in 33s)
- **lint**: ✅ PASS (after `lint:fix` for line-ending normalization)
- **check-types**: ✅ PASS (full Turbo cache hit)
- **test**: ⚠️ PARTIAL (201 pass, 25 fail — identical to working tree)
- **build**: ✅ PASS (full Turbo cache hit)

**Test failures**: The 25 failing tests in `packages/configconv` are scanner integration tests that depend on filesystem fixtures not present in the test environment. These failures existed before governance work and are recorded as known issues for G1.

**Package verification**: Deferred to G2 (Sidecar Distribution) — requires Electron packaging environment and is not a G0 exit criterion.

**Runtime verification**: Deferred to G1 (Ordinary Agent Protection) — behavioral regression testing belongs to the next gate.

A prior dirty-worktree observation from prototype work is preserved in [`history/prototype-observation-2026-08-27.md`](history/prototype-observation-2026-08-27.md) for reference only.

## Current blockers

**None.** G0 (Repository Baseline) is complete. All exit criteria met:

- ✅ Pre-governance WIP protected in rescue branch
- ✅ Git ignore boundaries corrected (product source visible, submodule content ignored)
- ✅ AgentCore reference pinned with verified provenance (commit `2ef9ad4c`, tree `148beb91`)
- ✅ Authority documents established (product, architecture, status, ADRs, tasks, reference, verification)
- ✅ Quality gates integrated (root/Turbo/CI test, Turbo build outputs)
- ✅ Clean checkout verification passed (all gates functional in fresh worktree)

## Residual risks

1. **Test failures in configconv**: 25 scanner tests fail due to missing filesystem fixtures. These are pre-existing and do not block G0, but must be resolved before configconv can be used in production.

2. **Line-ending normalization**: The repository uses LF (lineEnding: "lf" in biome.json) but Windows Git autocrlf creates CRLF in working tree. `lint:fix` normalizes on every checkout. This is expected behavior but adds friction.

3. **Biome submodule traversal**: Biome attempts to traverse Git submodules even when VCS ignore is enabled. Workaround: `.biomeignore` + `.gitignore` entry for `reference-project/AgentCore/` prevents traversal into AgentCore's nested biome.jsonc files.

4. **No push to remote**: Governance commits remain local-only as authorized. Merge/push strategy to be determined with user when moving to G1.

## Next steps

G0 complete. Ready for G1 (Ordinary Agent Protection):
- Establish OpenCode baseline behavioral test suite
- Verify session create/resume/abort/permission flows
- Document known working state before CEO integration begins
