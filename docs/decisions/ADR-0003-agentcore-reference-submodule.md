---
title: ADR-0003 Pinned AgentCore reference submodule
status: accepted
decided: 2026-08-27
authority: architecture-decision
---

# ADR-0003: Pinned AgentCore reference submodule

## Context

Migration work needs the complete AgentCore source locally, but an unpacked directory without a valid
revision cannot be reproduced, reviewed, or compared over time. Copying selected files would also make
coverage denominators drift.

## Decision

The AgentCore source of truth is stored at `reference-project/AgentCore` as a Git submodule pointing to
`https://github.com/Lawofall/AgentCore.git` and one exact commit. A reference manifest records the SHA,
license, tree identity, provenance method, and local-modification status.

BoatHarness does not modify the submodule without explicit authorization. Reference updates use a
separate commit and produce member-level capability and contract differences.

## Consequences

- Clones and CI initialize submodules.
- An unresolved local snapshot is preserved outside Git until its provenance is proven; it is not
  silently replaced by the newest upstream revision.
- Reference availability does not mean all upstream product surfaces belong in BoatHarness.
