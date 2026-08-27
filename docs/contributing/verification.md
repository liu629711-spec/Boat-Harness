---
title: Verification and evidence policy
status: current
last_updated: 2026-08-27
authority: verification-policy
---

# Verification and evidence policy

## Evidence levels

| Level | Meaning |
|---|---|
| `source-confirmed` | A pinned source revision declares or implements the behavior |
| `statically-wired` | Declaration, registration, call path and consumer are connected in reviewed code |
| `unit-tested` | Deterministic automated tests pass for the named revision |
| `runtime-observed` | A real development runtime produced the expected behavior |
| `packaged-observed` | The installed/package artifact produced the expected behavior |
| `manually-accepted` | An independent reviewer accepted the complete user-facing slice |
| `unknown` | Evidence is missing or contradictory |
| `excluded` | Scope explicitly excludes the capability with a recorded reason |

Levels do not imply one another. For example, `unit-tested` does not imply `runtime-observed`.

## Evidence record

Every evidence manifest records:

- repository revision and submodule revision;
- operating system, architecture, Bun version, and relevant runtime versions;
- exact command or repeatable user interaction;
- inputs that do not include credentials;
- exit code and bounded output hash;
- expected and actual result;
- evidence level;
- exclusions, unknowns, and residual risk.

Raw provider keys, databases, logs with private paths, tool sandboxes, and decrypted values stay outside
Git. A redacted summary may be committed when it retains enough information to reproduce the check.

## Required repository gates

From the repository root:

```bash
bun install --frozen-lockfile
bun run lint
bun run check-types
bun run test
bun run build
```

Run the same gates in a temporary clean worktree with initialized submodules. Packaging is a separate
gate and must use the platform-specific package command.

## Vertical-slice rule

A migrated user capability is traced through:

```text
user entry → renderer → preload → main → engine → event
→ durable journal → deterministic fold → UI → terminal state → reload/recovery
```

Missing stages are recorded as `pending` or `unknown`, never implied by neighboring tests.

## Failure reporting

- Report the exact failing command and first actionable error.
- Do not weaken assertions or accept a new baseline solely to make a gate pass.
- `NOT RUN`, unavailable platform, and missing credentials are not passes.
- Developer verification is not independent product acceptance.
