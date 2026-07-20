---
title: Markdown 语法说明
---

# Markdown 语法说明

VitePress 支持标准的 Markdown 语法以及一些扩展功能。

## 标题

```md
# 一级标题
## 二级标题
### 三级标题
```

## 代码块

```ts
const greet = (name: string) => {
  return `Hello, ${name}!`
}
```

## 表格

| 语法 | 说明 |
|------|------|
| `**粗体**` | **粗体** |
| `*斜体*` | *斜体* |
| `~~删除线~~` | ~~删除线~~ |

## 提示框

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险提示
:::

## 更多

参考 [VitePress Markdown 文档](https://vitepress.dev/guide/markdown)。
