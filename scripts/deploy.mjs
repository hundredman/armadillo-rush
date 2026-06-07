import { execSync } from 'child_process'
import { cpSync, rmSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const run = (cmd) => execSync(cmd, { cwd: root, stdio: 'inherit' })

// 현재 브랜치 저장
const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { cwd: root })
  .toString().trim()

// 혹시 uncommitted 변경이 있으면 stash
const dirty = execSync('git status --porcelain', { cwd: root }).toString().trim()
if (dirty) run('git stash')

try {
  // gh-pages 브랜치가 있으면 switch, 없으면 orphan 생성
  const branches = execSync('git branch', { cwd: root }).toString()
  if (branches.includes('gh-pages')) {
    run('git checkout gh-pages')
    // 기존 파일 정리 (assets 폴더 + index.html)
    if (existsSync(resolve(root, 'assets'))) rmSync(resolve(root, 'assets'), { recursive: true })
    if (existsSync(resolve(root, 'index.html'))) rmSync(resolve(root, 'index.html'))
  } else {
    run('git checkout --orphan gh-pages')
    run('git reset --hard')
  }

  // dist/* 복사
  cpSync(resolve(root, 'dist'), root, { recursive: true })

  // 커밋 & 푸시
  run('git add index.html assets/')
  run('git commit -m "deploy"')
  run('git push origin gh-pages')

  console.log('\n✅  Deployed → https://hundredman.github.io/armadillo-rush/\n')
} finally {
  // 원래 브랜치 복귀
  run(`git checkout ${currentBranch}`)
  if (dirty) run('git stash pop')
}
