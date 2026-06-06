import { defineConfig } from 'vite'

// 정적 사이트로 빌드 (제출 시 dist 폴더를 그대로 열거나 호스팅 가능)
export default defineConfig({
  base: './',
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
    target: 'es2020',
  },
})
