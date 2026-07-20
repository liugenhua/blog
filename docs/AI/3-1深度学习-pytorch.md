### 1. 张量是什么
+ 张量 Tensor 是 PyTorch 里的基础数据结构，可以理解成多维数组。
+ 0 维是标量，1 维是向量，2 维是矩阵，更高维就是多维张量。
+ 重点属性：
    - shape：形状
    - dtype：数据类型

### 2. 创建张量
+ 最常用写法：torch.tensor(...)
+ 常见来源：
    - 标量：torch.tensor(999)
    - 列表：torch.tensor([1, 2, 3])
    - 二维列表：torch.tensor([[1, 2], [3, 4]])
    - Numpy 数组：torch.tensor(arr)
+ 按规律创建：
    - torch.arange(start, end, step)：左闭右开
    - torch.linspace(start, end, steps)：左右都包含，按元素个数生成
+ 随机创建：
    - torch.randint(...)：随机整数
    - torch.rand(...)：[0,1) 随机小数
    - torch.randn(...)：标准正态分布随机数
+ 特殊创建：
    - torch.ones(...)
    - torch.zeros(...)
    - torch.full(...)
    - torch.ones_like(...)、zeros_like(...)、full_like(...)

### 3. 数据类型
+ 常见类型：
    - torch.int64
    - torch.float32
    - torch.float64
+ 查看类型：t.dtype
+ 类型转换：
    - t.int()
    - t.long()
    - t.half()
    - t.type(...)

### 4. 张量和 Numpy 的转换
+ 张量转 Numpy：t.numpy()
+ Numpy 转张量：
    - torch.from_numpy(arr)：共享内存
    - torch.tensor(arr)：通常不共享内存
+ 标量张量转普通数字：t.item()
+ 重点：
    - numpy() 默认共享内存
    - from_numpy() 默认共享内存
    - tensor(arr) 通常会复制一份数据

### 5. 张量运算
+ 基本运算：
    - +、-、*、/
+ 函数写法：
    - add()、mul()、neg()
+ 原地修改：
    - add_()、mul_() 等
    - 带下划线的方法通常表示直接修改原张量

**6. 点乘和矩阵乘法**

+ A * B：对应位置相乘
+ A @ B：矩阵乘法
+ 区别：
    - * 要求形状通常一致
    - @ 要求前一个张量的列数等于后一个张量的行数

### 7. 计算函数
+ 常用函数：
    - sum()：求和
    - mean()：平均值
    - min()：最小值
    - sqrt()：开平方
    - log2()：以 2 为底取对数
+ dim 的意义：
    - sum(dim=0)：按列计算
    - sum(dim=1)：按行计算

### 8. 索引操作
+ 取一行：t[1]
+ 取一列：t[:, 2]
+ 取单个元素：t[2, 1]
+ 切片：t[:2, :2]
+ 列表索引：t[[0,1], [1,2]]
+ 布尔索引：t[t[:, 3] > 10, :]
+ 核心规则：
    - 下标从 0 开始
    - t[i, j] 表示第 i 行第 j 列

### 9. 形状改变
+ 查看形状：
    - t.shape
    - t.size()
+ 改形状：reshape(...)
+ 自动推断：reshape(-1, ...)
+ 升维：unsqueeze(dim)
+ 降维：squeeze()
+ 交换维度：
    - transpose(dim0, dim1)：交换两个维度
    - permute(...)：重排多个维度
+ 重点：
    - 改形状时，元素总数不能变

### 10. 张量拼接
+ torch.cat([...], dim=...)
    - 沿已有维度拼接
    - dim=0：上下拼
    - dim=1：左右拼
+ torch.stack([...])
    - 新增一个维度再叠起来
    - 要求所有张量形状完全一致

### 11. 高频易错点
+ torch.tensor(...) 和 torch.Tensor(...) 不要混
+ arange 和 linspace 区别要记清
+ * 和 @ 完全不是一回事
+ sum(dim=0) 是按列，sum(dim=1) 是按行
+ from_numpy() 和 tensor(arr) 的内存共享不同
+ squeeze 是删长度为 1 的维度，unsqueeze 是加长度为 1 的维度
+ cat 是拼接，stack 是新增维度后堆叠

