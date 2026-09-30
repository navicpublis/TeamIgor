import { defineConfig } from 'vite'

// Site standalone (um único index.html com CSS/JS/imagens embutidos).
// O Vite usa index.html como entrada e gera dist/ pronto pra Vercel.
export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,                 // mantém o código exatamente como está
    assetsInlineLimit: 100000000,  // não fatiar nada (tudo já é inline)
    chunkSizeWarningLimit: 6000
  }
})
