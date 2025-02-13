import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/ahtear-resume/",
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  build: {
    chunkSizeWarningLimit: 1000 // Set to 1000 kB instead of 500 kB
  }
})
