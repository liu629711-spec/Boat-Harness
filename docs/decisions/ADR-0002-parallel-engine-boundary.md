---
title: ADR-0002 Parallel engine boundary
status: accepted
decided: 2026-08-27
authority: architecture-decision
---

# ADR-0002: Parallel engine boundary

## Context

BoatHarness needs to preserve its existing OpenCode coding-agent workflow while adding an AgentCore
orchestration experience. Treating AgentCore as an OpenCode plugin or session would couple unrelated
protocols, recovery models, and process lifecycles.

## Decision

OpenCode Agent mode and AgentCore CEO mode are independent engines behind one BoatHarness desktop
shell.

OpenCode retains HTTP/SSE, OpenCode sessions, host lifecycle, permissions, questions, model and abort
semantics. AgentCore uses a separately owned stdio sidecar, versioned contract, AgentCore identities,
durable event authority, fold, cancellation, and recovery. They do not share sessions, ports,
lockfiles, event streams, credentials, or process ownership.

Shared UI and project concepts connect through engine-specific adapters and projections.

## Consequences

- Engine coexistence requires explicit mode routing rather than a universal session abstraction.
- A failure or restart in one engine must not corrupt the other.
- Cross-engine features are product-level coordination and need explicit contracts.
- Two engines may legitimately present different states for similarly named concepts.
