import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
      '@components': path.resolve(process.cwd(), './src/components'),
      '@domain': path.resolve(process.cwd(), './src/domain'),
      '@infrastructure': path.resolve(process.cwd(), './src/infrastructure'),
      '@hooks': path.resolve(process.cwd(), './src/hooks'),
      '@utils': path.resolve(process.cwd(), './src/utils'),
    },
  },
})
