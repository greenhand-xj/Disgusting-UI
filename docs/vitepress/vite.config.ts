import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, '../../src/components'),
    },
  },
})
