# Button 按钮

按钮用于开始一个即时操作。

::: tip

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

:::

## 形态

:::demo 通过`type`设置按钮形态，目前支持`primary`、`success`、`warning`、`danger`、`outline`、`text`，默认为`primary`。

```vue
<template>
  <dis-button type="primary">primary</dis-button>
  <dis-button type="success">success</dis-button>
  <dis-button type="warning">warning</dis-button>
  <dis-button type="danger">danger</dis-button>
  <dis-button type="outline">outline</dis-button>
  <dis-button type="text">text</dis-button>
</template>
```

:::

## 尺寸

:::demo 通过`size`设置按钮尺寸，支持`small`、`medium`、`large`、`mini`四种类型的尺寸，默认为`md`。

```vue
<template>
  <dis-button type="primary" size="large">primary</dis-button>
  <dis-button type="primary" size="medium">primary</dis-button>
  <dis-button type="primary" size="small">primary</dis-button>
  <dis-button type="primary" size="mini">primary</dis-button>
</template>
```

:::

## 禁用状态

:::demo 通过`disabled`参数设置按钮禁用状态。

```vue
<template>
  <dis-button type="primary" disabled>primary</dis-button>
  <dis-button type="success" disabled>success</dis-button>
  <dis-button type="warning" disabled>warning</dis-button>
  <dis-button type="danger" disabled>danger</dis-button>
  <dis-button type="outline" disabled>outline</dis-button>
  <dis-button type="text" disabled>text</dis-button>
</template>
```

:::

## 形状

:::demo 通过`shape`参数设置按钮形状，支持`square`、`circle`、`round`三种类型的洗形状,默认是 square。

```vue
<template>
  <dis-button type="primary" shape="square">primary</dis-button>
  <dis-button type="primary" shape="circle">1</dis-button>
  <dis-button type="primary" shape="round">warning</dis-button>
</template>
```

:::

## 块级按钮

:::demo 通过`block`参数设置按钮是否是块级。

```vue
<template>
  <div>
    <dis-button type="primary" block>primary</dis-button>
    <dis-button type="outline" block>primary</dis-button>
    <dis-button type="text" block>primary</dis-button>
  </div>
</template>
```

:::

## 加载中状态

:::demo 通过`loading`参数设置加载按钮。

```vue
<template>
  <div>
    <dis-button type="primary" loading>primary</dis-button>
    <dis-button type="primary" loading shape="circle"></dis-button>
    <dis-button type="primary" loading shape="round">loading</dis-button>
    <dis-button type="outline" loading shape="circle"></dis-button>
    <dis-button type="text" loading></dis-button>
  </div>
</template>
```

:::

## Button 参数

| 参数名   | 类型                          | 默认    | 说明                  | 跳转 Demo                 |
| :------- | :---------------------------- | :------ | :-------------------- | :------------------------ |
| type     | [IButtonType](#ibuttontype)   | primary | 可选，按钮形态        | [形态](#形态)             |
| size     | [IButtonSize](#ibuttonsize)   | medium  | 可选，按钮尺寸        | [尺寸](#尺寸)             |
| shape    | [IButtonShape](#ibuttonshape) | square  | 可选，按钮形状        | [形状](#形状)             |
| disabled | `boolean`                     | false   | 可选，是否禁用 button | [禁用状态](#禁用状态)     |
| loading  | `boolean`                     | false   | 可选，设置加载中状态  | [加载中状态](#加载中状态) |
| block    | `boolean`                     | false   | 可选，设置加载中状态  | [块级按钮](#块级按钮)     |

## Button 类型定义

### IButtonType

```ts
type IButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'text'
  | 'outline'
```

### IButtonSize

```ts
type IButtonSize = 'large' | 'medium' | 'small' | 'mini'
```

### IButtonShape

```ts
type IButtonSize = 'circle' | 'square' | 'round'
```
