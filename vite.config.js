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
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'vendor-three'
          if (id.includes('node_modules/postprocessing')) return 'vendor-postfx'
          if (id.includes('node_modules/planck')) return 'vendor-physics'
        },
      },
    },
  },
})
