import { listFeatures, DEFAULT_FLAGS } from './features.js'

const config = listFeatures()
const names = Object.keys(DEFAULT_FLAGS).sort()

console.log('\n  CCB Feature Flags\n')
for (const name of names) {
  const current = config[name] ?? DEFAULT_FLAGS[name]
  const status = current ? '  ON ' : '  OFF'
  const style = current ? '\x1b[32m' : '\x1b[31m'
  console.log(`  ${style}${status}\x1b[0m  ${name}`)
}
console.log()
