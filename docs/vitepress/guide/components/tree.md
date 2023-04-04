# Tree 树

一种呈现嵌套结构的组件。

#### 何时使用

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树组件可以完整展现其中的层级关系，并具有展开/收起、选择等交互功能。

### 基本用法

:::demo 展示嵌套树形结构的呈现、连接线、展开/收起、点击选择等功能。

```vue
<template>
  <dis-tree :data="data"></dis-tree>
</template>
<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'docs',
        id: 'docs',
      },
      {
        label: 'packages',
        id: 'packages',
        expanded: true,
        children: [
          {
            label: 'plugin-vue',
            id: 'plugin-vue',
          },
          {
            label: 'vite',
            id: 'vite',
            expanded: true,
            children: [
              {
                label: 'src',
                id: 'src',
              },
              {
                label: 'README.md',
                id: 'README.md',
              },
            ],
          },
        ],
      },
      {
        label: 'scripts',
        id: 'scripts',
        children: [
          {
            label: 'release.ts',
            id: 'release.ts',
          },
          {
            label: 'verifyCommit.ts',
            id: 'verifyCommit.ts',
          },
        ],
      },
      {
        label: 'pnpm-workspace.yaml',
        id: 'pnpm-workspace.yaml',
      },
    ])
    return {
      data,
    }
  },
})
</script>
```

:::
