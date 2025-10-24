import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/presentation/components'),
      '@/hooks': path.resolve(__dirname, './src/presentation/hooks'),
      '@/domain': path.resolve(__dirname, './src/domain'),
      '@/data': path.resolve(__dirname, './src/data'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/types': path.resolve(__dirname, './src/types'),
    },
  },
})
