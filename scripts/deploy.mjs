import { execSync } from 'child_process'
import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync } from 'fs'
import { tmpdir } from 'os'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const tempRoot = mkdtempSync(join(tmpdir(), 'armadillo-rush-gh-pages-'))
const deployRepo = resolve(tempRoot, 'repo')

const run = (cmd, cwd = root) => execSync(cmd, { cwd, stdio: 'inherit' })
const output = (cmd, cwd = root) => execSync(cmd, { cwd }).toString().trim()

if (!existsSync(resolve(dist, 'index.html'))) {
  throw new Error('dist/index.html is missing. Run npm run build before deploy.')
}

try {
  const remoteUrl = output('git config --get remote.origin.url')
  if (!output('git branch --list gh-pages')) {
    throw new Error('gh-pages branch is missing. Create it once before deploying.')
  }

  run(`git clone --branch gh-pages --single-branch "${root}" "${deployRepo}"`)
  run('git remote rename origin local', deployRepo)
  run(`git remote add origin "${remoteUrl}"`, deployRepo)

  for (const entry of readdirSync(deployRepo)) {
    if (entry === '.git') continue
    rmSync(resolve(deployRepo, entry), { recursive: true, force: true })
  }

  cpSync(dist, deployRepo, { recursive: true })

  run('git add --all', deployRepo)

  if (!output('git status --porcelain', deployRepo)) {
    console.log('\nNo deploy changes to publish.\n')
  } else {
    run('git commit -m "deploy"', deployRepo)
    run('git push local gh-pages', deployRepo)
    run('git push origin gh-pages', deployRepo)
    console.log('\nDeployed -> https://hundredman.github.io/armadillo-rush/\n')
  }
} finally {
  rmSync(tempRoot, { recursive: true, force: true })
}
