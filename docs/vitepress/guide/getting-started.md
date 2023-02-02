# Getting Started

::: warning
VitePress is currently in `alpha` status. It is already suitable for out-of-the-box documentation use, but the config and theming API may still change between minor releases.
:::

## Step. 1: 安装依赖

:tada:

```sh
$ pnpm i disgusting-ui
```

## Step. 2: 全量引入

在 `mian.ts` 中引入

```ts
import { createApp } from 'vue'
import App from './App.vue'
import ui from 'disgusting-ui'
import 'disgusting-ui/style'

const app = createApp(App)

app.use(ui).mount('#app')
```

## Step. 3: 按需引入

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'disgusting-ui'
// or  import Button from 'disgusting-ui/button'
import 'disgusting-ui/button/style'

const app = createApp(App)

app.use(Button).mount('#app')
```

## Step. 3: Usage

:::demo 以 button 为例

```vue
<template>
  <dis-button type="primary"> primary </dis-button>
</template>
```

:::
