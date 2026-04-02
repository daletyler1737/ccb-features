---
name: ccb-features
description: |
  CCB-style Feature Flag system for OpenClaw. Global on/off switches for experimental features.
  Use when: user wants to enable/disable specific behaviors, test new features incrementally,
  or A/B test different behaviors. Triggers: "feature flag", "enable/disable feature",
  "experimental feature", "A/B test", "gradual rollout".
---

# CCB Feature Flags

Global feature switch system inspired by Claude Code Best's `feature()` function.

## Architecture

```
features.json     <- Main config (JSON)
scripts/
  features.ts      <- Core feature lookup logic
  list.ts          <- List all features
  enable.ts        <- Enable a feature
  disable.ts       <- Disable a feature
  check.ts         <- Check if a feature is on
```

## Usage

### List all features
```bash
node scripts/list.ts
```

### Check a feature
```bash
node scripts/check.ts exec.semantic-classify
```

### Enable / Disable
```bash
node scripts/enable.ts exec.semantic-classify
node scripts/disable.ts agent.memory-snapshot
```

## Default Flags

| Flag | Default | Description |
|------|---------|-------------|
| `exec.semantic-classify` | off | Classify exec commands as search/read/write/destructive |
| `exec.sandbox` | off | Run dangerous commands in sandbox |
| `exec.rich-output` | off | Show exec results with markdown formatting |
| `agent.memory-snapshot` | off | Snapshot agent memory for resume |
| `task.auto-track` | off | Auto-track exec commands as tasks |
| `task.auto-commit` | off | Auto-commit changes after task completion |

## Config File

Features are stored in `~/.openclaw/features/features.json`.

## Integration

To use in other skills:
```typescript
import { feature } from './features.js'
if (feature('exec.semantic-classify')) {
  // new behavior
}
```
