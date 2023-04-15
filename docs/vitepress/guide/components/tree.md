# Tree 树

一种呈现嵌套结构的组件。

### 何时使用

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树组件可以完整展现其中的层级关系，并具有展开/收起、选择等交互功能。

## 基本用法

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

## 可勾选

:::demo 通过`checkable`开启勾选功能。

```vue
<template>
  <dis-tree :data="data" checkable></dis-tree>
</template>
<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'docs',
        id: 'docs',
        checked: true,
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
            checked: true,
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

## 自定义图标

:::demo 通过`content`插槽可以自定义节点内容，比如在节点内容前面增加一个图标；通过`icon`插槽可以自定义展开/收起的图标。

```vue
<template>
  <dis-tree :data="data">
    <template #content="{ nodeData }">
      <svg style="margin-right: 8px" viewBox="0 0 16 16" width="16" height="16">
        <path
          :d="`${
            nodeData.isLeaf
              ? 'M13,6 L9,6 L9,5 L9,2 L3,2 L3,14 L13,14 L13,6 Z M12.5857864,5 L10,2.41421356 L10,5 L12.5857864,5 Z M2,1 L10,1 L14,5 L14,15 L2,15 L2,1 Z'
              : nodeData.expanded
              ? 'M16,6 L14,14 L2,14 L0,6 L16,6 Z M14.7192236,7 L1.28077641,7 L2.78077641,13 L13.2192236,13 L14.7192236,7 Z M6,1 L8,3 L15,3 L15,5 L14,5 L14,4 L7.58578644,4 L5.58578644,2 L2,2 L2,5 L1,5 L1,1 L6,1 Z'
              : 'M14,6 L14,5 L7.58578644,5 L5.58578644,3 L2,3 L2,6 L14,6 Z M14,7 L2,7 L2,13 L14,13 L14,7 Z M1,2 L6,2 L8,4 L15,4 L15,14 L1,14 L1,2 Z'
          }`"
          stroke-width="1"
          fill="#8a8e99"
        ></path>
      </svg>
      {{ nodeData.label }}
    </template>
    <template #icon="{ nodeData, toggleNode }">
      <span v-if="nodeData.isLeaf"></span>
      <span
        v-else
        @click="
          (event) => {
            event.stopPropagation()
            toggleNode(nodeData)
          }
        "
      >
        <svg
          :style="{
            transform: nodeData.expanded ? 'rotate(90deg)' : '',
            marginLeft: '-2.5px',
            marginRight: '14.5px',
            cursor: 'pointer',
          }"
          viewBox="0 0 1024 1024"
          width="12"
          height="12"
        >
          <path
            d="M204.58705 951.162088 204.58705 72.836889 819.41295 511.998977Z"
            fill="#8a8e99"
          ></path>
        </svg>
      </span>
    </template>
  </dis-tree>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'docs',
        id: 'docs',
        checked: true,
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
            checked: true,
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
