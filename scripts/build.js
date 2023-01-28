import { defineConfig, build } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from 'url'
import fsExtra from 'fs-extra'
import fs from 'fs'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const entryFile = resolve(__dirname, '../src/components/index.ts')
const outputDir = resolve(__dirname, '../lib')
const componentDirs = resolve(__dirname, '../src/components')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
})

const rollupOptions = {
  // 确保外部化处理那些你不想打包进库的依赖
  external: ['vue', 'vue-router'],
  output: {
    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    globals: {
      vue: 'Vue',
    },
  },
}

// 生成package.json
const createPackageJson = (name) => {
  // 预设
  const fileStr = `{
    "name": "${name ? name : 'disgusting-ui'}",
    "version": "0.0.2",
    "main": "${name ? 'index.umd.cjs' : 'disgusting-ui.umd.cjs'}",
    "module": "${name ? 'index.js' : 'disgusting-ui.js'}",
    "type": "module",
    "exports": {
      ".": {
        "import": "./${name ? 'index.js' : 'disgusting-ui.js'}",
        "require": "./${name ? 'index.umd.cjs' : 'disgusting-ui.umd.cjs'}"
      },
      "./style": "./style.css"
    },
    "types": "index.d.ts",
    "author": "xbx",
    "description": "由 Vue3+Vite+Tailwind+tsx 打造的UI组件库",
    "repository": {
      "type": "git",
      "url": "https://github.com/greenhand-xj/Disgusting-UI"
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/greenhand-xj/Disgusting-UI/issues"
    }
  }`

  if (name) {
    // 单个组件，输出对应的package.json
    fsExtra.outputFile(
      resolve(outputDir, `${name}/package.json`),
      fileStr,
      'utf-8'
    )
  } else {
    // 全量
    fsExtra.outputFile(resolve(outputDir, 'package.json'), fileStr, 'utf-8')
  }
}

// 全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      plugins: baseConfig.plugins.concat([
        dts({
          entryRoot: './src/components/',
          include: ['src/components/index.ts'],
          outputDir: resolve(outputDir),
        }),
      ]),
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'disgusting-ui',
          fileName: 'disgusting-ui',
          formats: ['es', 'umd'],
        },
        outDir: outputDir,
      },
    })
  )
  createPackageJson()
}
// 单个组件构建
const buildSingle = async (name) => {
  await build(
    defineConfig({
      ...baseConfig,
      plugins: baseConfig.plugins.concat([
        dts({
          entryRoot: './src/components/**',
          include: ['src/components/**'],
          outputDir: resolve(outputDir, name),
        }),
      ]),
      build: {
        rollupOptions,
        lib: {
          entry: resolve(componentDirs, name, 'index.ts'),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd'],
        },
        outDir: resolve(outputDir, name),
      },
    })
  )
  createPackageJson(name)
}

const buildLib = async () => {
  await buildAll()
  //按需打包
  const components = fs.readdirSync(componentDirs).filter((name) => {
    const componentDir = resolve(componentDirs, name)
    //看是不是目录
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  })
  for (let i = 0, l = components.length; i < l; i++) {
    await buildSingle(components[i])
    createPackageJson(components[i])
  }
}
buildLib()
