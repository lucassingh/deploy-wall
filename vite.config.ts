import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/modules/_variables.scss";`
      }
    }
  }
})
