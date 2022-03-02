import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // root: './src',
  // base: '/',
  plugins: [react()],
  build: {
    // assetsDir: '../assets',
    target: 'esnext',
    outDir: '../online',
    rollupOptions: {
      input: {
        index: resolve(__dirname, './index.html'),
        ModelViewPlugin: resolve(__dirname, 'src/0.ModelViewPlugin/index.html'),
        PanoFloorplanRadarPlugin: resolve(__dirname, 'src/1.PanoFloorplanRadarPlugin/index.html'),
        ModelRoomLabelPlugin: resolve(__dirname, 'src/2.ModelRoomLabelPlugin/index.html'),
        TopviewFloorplanPlugin: resolve(__dirname, 'src/3.TopviewFloorplanPlugin/index.html'),
        ModelChassisCompassPlugin: resolve(__dirname, 'src/4.ModelChassisCompassPlugin/index.html'),
        ModelEntryDoorGuidePlugin: resolve(__dirname, 'src/5.ModelEntryDoorGuidePlugin/index.html'),
        CSS3DRenderPlugin: resolve(__dirname, 'src/6.CSS3DRenderPlugin/index.html'),
        ModelEntryDoorGuCameraMovementPluginidePlugin: resolve(__dirname, 'src/7.CameraMovementPlugin/index.html'),
        PanoCursorRaycasterPlugin: resolve(__dirname, 'src/8.PanoCursorRaycasterPlugin/index.html'),
      },
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      }
    }
  }
})
