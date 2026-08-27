---
title: Pre-governance WIP recovery inventory
status: historical
observed_at: 2026-08-27
authority: none
---

# Pre-governance WIP recovery inventory

## Recovery point

- Base revision: `70956205c467c194084ba34e97c2748d2334859c`
- Local branch: `backup/pre-governance-2026-08-27`
- Rescue commit: `525197d`
- Commit message: `chore: checkpoint pre-governance WIP`
- Push status at capture: not pushed by repository governance work

The rescue commit contains 147 changed or added files. Local databases, WAL/SHM files, logs, lock and
heartbeat files, fake executables, code-search indexes, duplicate baseline archives, AgentCore runtime
environments, and the unpacked reference tree were excluded from the commit.

## Machine-grouped assets

| Group | File count | Recovery purpose |
|---|---:|---|
| AgentCore main/sidecar source and tests | 27 | Contract, transport, journal, manager, provider policy and deterministic tests |
| CEO renderer projection/prototype | 12 | Session projection, sidebar prototype, service bridge and tests |
| WIP database migrations | 6 | Three migration SQL/snapshot pairs |
| Runtime/evidence harness source | 5 | Contract, handshake, sidecar, runtime and renderer-link probes |
| Managed OpenCode host-isolation core | 4 | Manager, lockfile, registry and renderer connection changes |
| Coupled integration/manifest changes | 12 | Main/preload/backend/sidebar/schema and dependency coupling |
| Pre-governance PM documents/evidence | 81 | Historical source notes and local observations only |

Counts were derived with `git diff --name-only main..backup/pre-governance-2026-08-27` and path rules.
They are recovery counts, not capability coverage.

## Known integration concerns

- Per-project OpenCode work does not yet reconcile all discovery, client, event fan-in, tray,
  automation, settings, reattachment, password readiness and shutdown paths.
- AgentCore SQLite, main-process journal, sidecar state, session index and renderer projection do not yet
  have one declared durable authority.
- Development sidecar probes do not establish packaged runtime availability.
- `CeoLinkProbe` and `window.__ceoProbe` are evidence tooling, not an approved product route.
- The three migrations require fresh-database and upgrade-path testing as one ordered migration chain.

No group should be cherry-picked wholesale. Reintroduction starts from an approved vertical-slice task
and names the exact files and evidence it needs.
