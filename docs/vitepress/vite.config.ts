import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { SearchPlugin } from 'vitepress-plugin-search'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    SearchPlugin({
      previewLength: 62,
      buttonLabel: 'Search',
      placeholder: 'Search docs',
    }),
  ],
  resolve: {
    alias: {
      '@components': resolve(__dirname, '../../src/components'),
    },
  },
})
