---
title: G0 repository baseline
status: active
last_updated: 2026-08-27
authority: active-task
---

# G0 repository baseline

## Outcome

Produce a recoverable and reproducible BoatHarness governance branch without introducing new CEO
product behavior.

## In scope

- local rescue branch and commit for all pre-governance WIP source;
- explicit ignore rules and reviewed cleanup of generated local artifacts;
- exact AgentCore upstream provenance and pinned submodule;
- BoatHarness README, authority map, scope, architecture, status, roadmap, ADRs, verification policy,
  coverage model, and one bounded history record;
- root/Turbo/CI test integration and correct build outputs;
- frozen clean-worktree checks and Windows package attempt;
- a local commit series with no push.

## Excluded

- merging host-isolation or CEO WIP into the product baseline;
- choosing AgentCore durable state authority;
- implementing a CEO route or interactions;
- claiming packaged AgentCore support;
- renaming compatibility package, bridge, app ID, or storage identifiers;
- modifying upstream AgentCore source.

## Stop conditions

Stop rather than guess if the local AgentCore snapshot cannot be matched to an upstream revision, a
secret is found in material proposed for Git, a cleanup target is referenced by product code, or a
baseline gate exposes an unrelated product regression requiring scope expansion.

## Exit evidence

- branch and commit identities;
- clean Git status;
- submodule URL/SHA/license/tree manifest;
- ignore-boundary checks;
- current-tree and clean-worktree install/lint/typecheck/test/build results;
- Windows package result;
- explicit `NOT RUN` entries for unsupported or blocked runtime checks;
- deletion, preservation, unknown, and residual-risk lists.
