/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@': resolve(__dirname, 'src'),
    },
  },
  // 测试环境配置
  test: {
    include: ['src/**/__tes__/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
