import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: resolve(__dirname, 'resources/index.tsx'),
      name: 'dnalogel',
      // formats: ['es'],
      fileName: (format) => `dnalogel.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'three', '@realsee/five'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          five: 'FiveSDK',
          three: 'THREE'
        }
      }
    },
    minify: 'terser',
    outDir: 'lib',
    watch: {}
  }
})
