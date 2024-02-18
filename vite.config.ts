import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@images': '/src/assets/images',
      '@styles': '/src/assets/styles',
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    }
  }
})
