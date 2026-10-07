import { defineConfig } from 'vite'

// Slidev's `--uno` in `.slidev-code-line-numbers ... .line::before` is emitted
// as invalid nested CSS that lightningcss refuses to minify.
export default defineConfig({
  build: {
    cssMinify: false,
  },
})
