---
title: AgentCore reference manifest
status: pending-provenance
last_updated: 2026-08-27
authority: reference-manifest
---

# AgentCore reference manifest

## Intended reference

- Upstream URL: `https://github.com/Lawofall/AgentCore.git`
- BoatHarness path: `reference-project/AgentCore`
- Management: Git submodule pinned to one exact commit
- Local modifications: prohibited without explicit authorization

## Current state

The pre-governance snapshot at `reference-project/AgentCore-master` advertises the upstream URL but its
nested Git metadata has no valid `HEAD`. A local recovery manifest hashed 17,707 non-`.git` files before
conversion. The snapshot remains ignored and intact until an exact upstream revision is proven by
file-level comparison.

The reference SHA, Git tree, license path, comparison method, and submodule status are intentionally not
filled with guessed values. Until this manifest changes to `status: pinned`, AgentCore provenance is a
G0 blocker and the snapshot cannot authorize implementation as a reproducible source revision.

## Required pin record

A completed manifest must record:

- exact commit SHA and commit date;
- Git tree SHA;
- upstream remote URL;
- license identifier and path;
- snapshot-to-upstream comparison method and any excluded generated files;
- `.gitmodules` path and URL;
- `git submodule status` output;
- confirmation that the submodule worktree has no local modifications.
