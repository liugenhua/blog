---
title: Python 入门
date: 2026-07-04
tags:
  - Python
  - 后端
---

# Python 入门

Python 是一门简洁、易读的编程语言，非常适合快速开发和数据处理。

## 基础语法

```python
# 变量
name = "Python"
version = 3.12

# 列表
fruits = ["苹果", "香蕉", "橘子"]
for fruit in fruits:
    print(fruit)

# 字典
person = {"name": "张三", "age": 25}
print(person["name"])

# 函数
def greet(name: str) -> str:
    return f"Hello, {name}!"
```

## 常用数据结构

```python
# 列表推导式
squares = [x**2 for x in range(10)]

# 集合
unique = {1, 2, 3, 3, 2}  # {1, 2, 3}

# 元组
point = (10, 20)
x, y = point  # 解包
```

## 虚拟环境

```bash
# 创建虚拟环境
python -m venv .venv

# 激活 (Windows)
.venv\Scripts\activate

# 安装依赖
pip install requests
```
