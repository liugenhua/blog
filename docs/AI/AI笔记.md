---
title: AI 笔记
date: 2026-07-04
tags:
  - AI
  - LLM
---

# AI 笔记

## 什么是 RAG？

RAG（Retrieval-Augmented Generation）是一种将检索与生成结合的技术。

```
用户提问 → 检索相关文档 → 拼接 Prompt → LLM 生成回答
```

### 核心流程

1. **文档切分**：将文档切分成合适大小的 chunks
2. **向量化**：用 Embedding 模型将 chunks 转为向量
3. **存入向量库**：如 Milvus、Qdrant、Chroma
4. **检索**：将用户问题向量化，在向量库中找最相似的 chunks
5. **生成**：将检索到的 chunks 作为上下文，交给 LLM 生成回答

## LangChain 简介

LangChain 是一个构建 LLM 应用的框架，提供：

- Prompt 管理
- 链式调用
- Agent 机制
- 记忆功能
- 工具调用

## 参考

后续会持续补充更多 AI 相关的学习笔记。
