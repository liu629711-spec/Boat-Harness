---
title: AgentCore coverage model
status: current
last_updated: 2026-08-27
authority: coverage-policy
---

# AgentCore coverage model

## Purpose

Coverage answers which capabilities exist in the pinned AgentCore source and what BoatHarness does with
each one. It is not a feature-count competition and cannot be established by comparing totals.

## Stable identity

Each inventory member has a stable ID derived from its source domain and declared name, for example:

```text
agentcore.event.<event-name>
agentcore.interaction.<kind>
agentcore.rpc.<method>
boatharness.ipc.<channel>
boatharness.route.<route-id>
boatharness.resource.<resource-id>
```

The inventory stores source path, source symbol or declaration, payload/flags, registration, callers,
persistence, fold, renderer, tests, packaged resource, and manual acceptance references when they
exist. If extraction is not reliable, the field is `unknown`; it is not filled from memory.

## Disposition

Every in-scope member receives exactly one disposition:

- `ported`: the capability preserves its relevant behavior in BoatHarness;
- `replaced`: BoatHarness intentionally supplies different behavior with a decision reference;
- `intentionally-dropped`: product scope rejects it with a reason;
- `platform-not-applicable`: the source capability cannot apply to a supported target platform;
- `dev-only`: retained only for development or evidence tooling;
- `pending`: accepted scope without a completed implementation;
- `unknown`: source meaning or product decision is unresolved.

A gate cannot close while an in-scope member remains `pending`, `unknown`, or has no disposition.

## Evidence

Disposition and evidence are independent. Evidence values are:

- `source-confirmed`;
- `statically-wired`;
- `unit-tested`;
- `runtime-observed`;
- `packaged-observed`;
- `manually-accepted`;
- `unknown`;
- `excluded`.

Evidence records the repository and submodule revisions. Later levels do not erase earlier evidence or
its limitations.

## Machine-derived denominators

Initial extractors should cover:

1. AgentCore event names and payload declarations;
2. interaction kinds, behavior flags, and wire mappings;
3. sidecar RPC methods and notifications;
4. Electron IPC declarations, registration, bridge exposure, and renderer calls;
5. routes, settings, commands, and user entry points;
6. test files and package/CI scripts;
7. packaged sidecar resources.

A reference update compares member identities and fields. A change in total count alone never proves a
superset, parity, or intentional removal.

## Vertical connection check

For user-visible capabilities, the inventory traces:

```text
user entry → renderer → preload → main → engine → event
→ durable journal → fold → UI → terminal state → reload/recovery
```

Any missing edge remains visible. Static wiring, tests, runtime, packaging, and independent visual
acceptance are reported separately.
