import { setFeature, DEFAULT_FLAGS } from './features.js'

const name = process.argv[2]
if (!name) {
  console.error('Usage: node enable.ts <feature-name>')
  console.error('\nAvailable features:')
  Object.keys(DEFAULT_FLAGS).forEach(f => console.error(`  - ${f}`))
  process.exit(1)
}

if (!(name in DEFAULT_FLAGS)) {
  console.error(`Unknown feature: ${name}`)
  console.error('Available features:')
  Object.keys(DEFAULT_FLAGS).forEach(f => console.error(`  - ${f}`))
  process.exit(1)
}

setFeature(name, true)
console.log(`✓ Enabled: ${name}`)
