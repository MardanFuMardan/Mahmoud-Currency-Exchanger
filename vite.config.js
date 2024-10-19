import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',  // تمكين دعم JSX
    include: /src\/.*\.jsx?$/,  // تعريف الملفات التي تحتاج JSX
  },
  build: {
    rollupOptions: {
      output: {
        // تسمية ملفات JavaScript للتأكد من أن Netlify يتعامل معها بشكل صحيح
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  },
  server: {
    // يساعد أحيانًا في التعامل مع المشاكل أثناء التطوير
    strictPort: true,
  }
})
