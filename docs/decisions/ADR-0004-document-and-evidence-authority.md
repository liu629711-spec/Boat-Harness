---
title: ADR-0004 Documentation and evidence authority
status: accepted
decided: 2026-08-27
authority: architecture-decision
---

# ADR-0004: Documentation and evidence authority

## Context

Prior planning mixed current status, role rosters, dispatch wording, source claims, local test reports,
and acceptance language across many files. Conflicts could not be resolved without reconstructing the
source and runtime state.

## Decision

Documentation has single-purpose authorities:

- `product.md` for scope;
- `architecture.md` for runtime boundaries;
- `status.md` for current dynamic facts;
- one ADR per accepted decision;
- one active task per authorized gate or slice;
- one manifest per evidence set or reference revision;
- `history/` for bounded observations that provide no authorization.

Evidence is classified as source-confirmed, statically wired, unit-tested, runtime-observed,
packaged-observed, manually accepted, unknown, or excluded. A stronger-sounding prose label cannot
promote evidence between levels.

## Consequences

- Session rosters and dispatch scripts do not live in repository authority files.
- Old approval language is either reduced to a bounded historical observation or removed.
- Current facts are updated in one place rather than copied across task and verification documents.
- Source-derived inventories are generated or checked mechanically; humans record disposition and
  rationale instead of transcribing a denominator.
