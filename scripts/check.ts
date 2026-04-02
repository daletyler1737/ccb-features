import { feature } from './features.js'

const name = process.argv[2]
if (!name) {
  console.error('Usage: node check.ts <feature-name>')
  process.exit(1)
}

const result = feature(name)
console.log(result ? 'true' : 'false')
