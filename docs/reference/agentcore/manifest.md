---
title: AgentCore reference manifest
status: pinned
last_updated: 2026-08-27
authority: reference-manifest
---

# AgentCore reference manifest

## Pinned reference

- **Commit SHA**: `2ef9ad4c2109a122cdd3d3d0f27eb468b205360e`
- **Commit date**: 2026-08-22 09:45:05 +0800
- **Git tree SHA**: `148beb9145c266739555a989b09133ab9cef7db9`
- **Upstream tags**: `desktop-v0.9.11`, `prod-2ef9ad4c2`
- **Upstream URL**: `https://github.com/Lawofall/AgentCore.git`
- **BoatHarness path**: `reference-project/AgentCore`
- **Management**: Git submodule
- **License**: MIT License, Copyright (c) 2026 Lawofall (`LICENSE`)
- **Local modifications**: prohibited without explicit authorization

## Provenance verification

The pre-governance snapshot at `reference-project/AgentCore-master/` was proven to exactly match the
pinned commit via full blob-by-blob comparison using a local upstream mirror. All 7,403 tracked files
matched after normalizing for `.gitattributes` (CRLF conversion on `gradlew.bat`). The snapshot
contained 10,304 additional files (`.venv/`, `__pycache__/`, etc.) that are all properly ignored by
upstream `.gitignore` and do not affect tracked content.

**Comparison method**: Full file hash comparison via temporary Git index against upstream mirror at
`D:\BoatHarness\.local\AgentCore-upstream.git`, with CRLF normalization per `.gitattributes`.

**Verification date**: 2026-08-27

## Submodule status

```
$ git submodule status
 2ef9ad4c2109a122cdd3d3d0f27eb468b205360e reference-project/AgentCore (desktop-v0.8.0-86-g2ef9ad4c)
```

Submodule worktree is clean with no local modifications.
