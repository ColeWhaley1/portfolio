import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
  assetsInclude: ['**/*.MP4']
})
