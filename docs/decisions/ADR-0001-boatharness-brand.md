---
title: ADR-0001 BoatHarness brand and compatibility identifiers
status: accepted
decided: 2026-08-27
authority: architecture-decision
---

# ADR-0001: BoatHarness brand and compatibility identifiers

## Context

The repository is derived from Palot and still contains `@palot/*` package names, a `window.palot`
preload API, application identifiers, update metadata, and XDG `palot` storage paths. The product owner
selected BoatHarness as the formal product name. A global rename would mix branding with data and
protocol migration and could strand existing installations.

## Decision

BoatHarness is the product brand in current product and governance documents. Existing internal Palot
identifiers remain compatibility interfaces until a dedicated migration defines import, IPC, updater,
application ID, and user-data compatibility plus rollback.

Upstream Palot attribution and MIT licensing remain visible. Unapproved repository, issue, release, and
download URLs are not advertised as BoatHarness publication channels.

## Consequences

- User-facing branding may temporarily coexist with internal Palot names.
- A later identifier migration is an architectural and data-migration change, not a search-and-replace.
- Brand cleanup cannot be used to justify unrelated runtime edits.
