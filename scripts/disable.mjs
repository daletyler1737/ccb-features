import { setFeature, DEFAULT_FLAGS } from './features.mjs'

const name = process.argv[2]
if (!name) {
  console.error('Usage: node disable.mjs <feature-name>')
  Object.keys(DEFAULT_FLAGS).forEach(f => console.error(`  - ${f}`))
  process.exit(1)
}
if (!(name in DEFAULT_FLAGS)) {
  console.error(`Unknown feature: ${name}`)
  process.exit(1)
}
setFeature(name, false)
console.log(`✓ Disabled: ${name}`)
