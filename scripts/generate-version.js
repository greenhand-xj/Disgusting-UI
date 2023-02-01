import json from '../package.json' assert { type: 'json' }
import fs from 'fs'
import { fileURLToPath } from 'url'
import { resolve } from 'path'
const __dirname = fileURLToPath(new URL('.', import.meta.url))

fs.writeFileSync(
  resolve(__dirname, '..', 'src', 'version.ts'),
  `export default '${json.version}'\n`
)
