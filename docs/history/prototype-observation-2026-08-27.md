---
title: Pre-governance AgentCore prototype observation
status: historical
observed_at: 2026-08-27
authority: none
---

# Pre-governance AgentCore prototype observation

This record describes a dirty working tree later captured by local rescue commit `525197d`. It does not
prove behavior on `main`, the governance branch, a clean checkout, or an installed application.

## Automated observation

The following Bun test selection was reported as executed against the pre-governance source:

```text
bun test src/main/agentcore src/renderer/atoms src/renderer/lib/agentcore-single-worker
```

Reported result:

```text
104 pass
0 fail
507 expect() calls
12 files
```

## What this can establish

Only the selected deterministic tests passed in that local source state. The observation does not
establish continuous integration coverage, ordinary OpenCode compatibility, sidecar distribution,
packaged startup, recovery across a real application restart, complete AgentCore capability coverage,
or manual UI acceptance.

## Preserved WIP areas

The rescue commit contains AgentCore main/sidecar tests, renderer projection tests, per-project OpenCode
host-isolation changes, migrations, probes, and old planning/evidence prose. Old PM acceptance language
was not carried into current documentation.
