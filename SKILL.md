---
name: ccb-features
description: |
  Feature Flag system / 功能开关系统
  Global on/off switches for experimental features.
  Use when: enabling/disabling features, A/B testing, gradual rollouts.
  用途：实验性功能的全局开关，支持 A/B 测试和渐进式发布。
  触发词 / Triggers: "feature flag", "enable/disable feature", "功能开关", "开启/关闭功能"
---

# CCB Feature Flags / 功能开关

Global feature switch system inspired by Claude Code Best's `feature()` function.
全局功能开关系统，支持实验性功能的热插拔。

## 架构 / Architecture

```
features.json     <- 配置文件 / Main config (JSON)
scripts/
  features.ts    <- 核心查询逻辑 / Core feature lookup
  list.ts        <- 列出所有功能 / List all features
  enable.ts      <- 开启功能 / Enable a feature
  disable.ts     <- 关闭功能 / Disable a feature
  check.ts       <- 检查功能状态 / Check if a feature is on
```

## 默认功能标志 / Default Flags

| 标志 Flag | 默认 Default | 说明 Description |
|-----------|-------------|------------------|
| `exec.semantic-classify` | off | 命令语义分类 / Classify exec as search/read/write/destructive |
| `exec.sandbox` | off | 沙箱执行危险命令 / Run dangerous commands in sandbox |
| `exec.rich-output` | off | 富文本输出格式 / Show exec results with markdown formatting |
| `agent.memory-snapshot` | off | 记忆快照 / Snapshot agent memory for resume |
| `task.auto-track` | off | 自动追踪任务 / Auto-track exec commands as tasks |
| `task.auto-commit` | off | 任务完成后自动提交 / Auto-commit changes after task completion |

## 使用方法 / Usage

```bash
# 列出所有功能 / List all features
node scripts/list.ts

# 检查某功能 / Check a feature
node scripts/check.ts exec.semantic-classify

# 开启功能 / Enable
node scripts/enable.ts exec.semantic-classify

# 关闭功能 / Disable
node scripts/disable.ts agent.memory-snapshot
```

## 配置文件 / Config File

功能存储在 `~/.openclaw/features/features.json`
Features stored in `~/.openclaw/features/features.json`
