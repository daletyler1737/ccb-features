import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const CONFIG_DIR = join(process.env.HOME || '', '.openclaw', 'features')
const CONFIG_FILE = join(CONFIG_DIR, 'features.json')

const DEFAULT_FLAGS: Record<string, boolean> = {
  'exec.semantic-classify': false,
  'exec.sandbox': false,
  'exec.rich-output': false,
  'agent.memory-snapshot': false,
  'task.auto-track': false,
  'task.auto-commit': false,
}

function loadConfig(): Record<string, boolean> {
  if (!existsSync(CONFIG_FILE)) {
    mkdirSync(CONFIG_DIR, { recursive: true })
    writeFileSync(CONFIG_FILE, JSON.stringify(DEFAULT_FLAGS, null, 2))
    return { ...DEFAULT_FLAGS }
  }
  return JSON.parse(readFileSync(CONFIG_FILE, 'utf-8'))
}

function saveConfig(config: Record<string, boolean>) {
  mkdirSync(CONFIG_DIR, { recursive: true })
  writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2))
}

export function feature(name: string): boolean {
  const config = loadConfig()
  return config[name] ?? false
}

export function setFeature(name: string, value: boolean) {
  const config = loadConfig()
  config[name] = value
  saveConfig(config)
}

export function listFeatures(): Record<string, boolean> {
  return loadConfig()
}

export { loadConfig, saveConfig, DEFAULT_FLAGS }
