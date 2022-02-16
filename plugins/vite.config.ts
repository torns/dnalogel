import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'
// import svelte from 'rollup-plugin-svelte'
import { svelte as sveltePlugin } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), sveltePlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/resources/index.tsx'),
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
      },
      plugins: [
          // svelte({
          //   extensions: [], // By default, all
          //   include: 'resources/**/*.svelte',
          //   compilerOptions: {}
          // })
      ]
    },
    minify: 'terser',
    outDir: 'dist',
    watch: {}
  }
})
