import type { App } from 'vue'
import Tree from './src/Tree'

export * from './src/tree-types'
Tree.install = (app: App) => {
  app.component(Tree.name, Tree)
}
export default Tree

declare module 'vue' {
  export interface GlobalComponents {
    DisTree: typeof Tree
  }
}
