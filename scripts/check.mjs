import { feature } from './features.mjs'
const name = process.argv[2]
if (!name) { console.error('Usage: node check.mjs <feature>'); process.exit(1) }
console.log(feature(name) ? 'true' : 'false')
