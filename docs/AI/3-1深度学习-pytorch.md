### <font style="color:#000000;">1. 张量是什么</font>
+ <font style="color:#000000;">张量</font><font style="color:#000000;"> </font><font style="color:#000000;">Tensor</font><font style="color:#000000;"> </font><font style="color:#000000;">是 PyTorch 里的基础数据结构，可以理解成多维数组。</font>
+ <font style="color:#000000;">0 维是标量，1 维是向量，2 维是矩阵，更高维就是多维张量。</font>
+ <font style="color:#000000;">重点属性：</font>
    - <font style="color:#000000;">shape</font><font style="color:#000000;">：形状</font>
    - <font style="color:#000000;">dtype</font><font style="color:#000000;">：数据类型</font>

### <font style="color:#000000;">2. 创建张量</font>
+ <font style="color:#000000;">最常用写法：</font><font style="color:#000000;">torch.tensor(...)</font>
+ <font style="color:#000000;">常见来源：</font>
    - <font style="color:#000000;">标量：</font><font style="color:#000000;">torch.tensor(999)</font>
    - <font style="color:#000000;">列表：</font><font style="color:#000000;">torch.tensor([1, 2, 3])</font>
    - <font style="color:#000000;">二维列表：</font><font style="color:#000000;">torch.tensor([[1, 2], [3, 4]])</font>
    - <font style="color:#000000;">Numpy 数组：</font><font style="color:#000000;">torch.tensor(arr)</font>
+ <font style="color:#000000;">按规律创建：</font>
    - <font style="color:#000000;">torch.arange(start, end, step)</font><font style="color:#000000;">：左闭右开</font>
    - <font style="color:#000000;">torch.linspace(start, end, steps)</font><font style="color:#000000;">：左右都包含，按元素个数生成</font>
+ <font style="color:#000000;">随机创建：</font>
    - <font style="color:#000000;">torch.randint(...)</font><font style="color:#000000;">：随机整数</font>
    - <font style="color:#000000;">torch.rand(...)</font><font style="color:#000000;">：</font><font style="color:#000000;">[0,1)</font><font style="color:#000000;"> </font><font style="color:#000000;">随机小数</font>
    - <font style="color:#000000;">torch.randn(...)</font><font style="color:#000000;">：标准正态分布随机数</font>
+ <font style="color:#000000;">特殊创建：</font>
    - <font style="color:#000000;">torch.ones(...)</font>
    - <font style="color:#000000;">torch.zeros(...)</font>
    - <font style="color:#000000;">torch.full(...)</font>
    - <font style="color:#000000;">torch.ones_like(...)</font><font style="color:#000000;">、</font><font style="color:#000000;">zeros_like(...)</font><font style="color:#000000;">、</font><font style="color:#000000;">full_like(...)</font>

### <font style="color:#000000;">3. 数据类型</font>
+ <font style="color:#000000;">常见类型：</font>
    - <font style="color:#000000;">torch.int64</font>
    - <font style="color:#000000;">torch.float32</font>
    - <font style="color:#000000;">torch.float64</font>
+ <font style="color:#000000;">查看类型：</font><font style="color:#000000;">t.dtype</font>
+ <font style="color:#000000;">类型转换：</font>
    - <font style="color:#000000;">t.int()</font>
    - <font style="color:#000000;">t.long()</font>
    - <font style="color:#000000;">t.half()</font>
    - <font style="color:#000000;">t.type(...)</font>

### <font style="color:#000000;">4. 张量和 Numpy 的转换</font>
+ <font style="color:#000000;">张量转 Numpy：</font><font style="color:#000000;">t.numpy()</font>
+ <font style="color:#000000;">Numpy 转张量：</font>
    - <font style="color:#000000;">torch.from_numpy(arr)</font><font style="color:#000000;">：共享内存</font>
    - <font style="color:#000000;">torch.tensor(arr)</font><font style="color:#000000;">：通常不共享内存</font>
+ <font style="color:#000000;">标量张量转普通数字：</font><font style="color:#000000;">t.item()</font>
+ <font style="color:#000000;">重点：</font>
    - <font style="color:#000000;">numpy()</font><font style="color:#000000;"> </font><font style="color:#000000;">默认共享内存</font>
    - <font style="color:#000000;">from_numpy()</font><font style="color:#000000;"> </font><font style="color:#000000;">默认共享内存</font>
    - <font style="color:#000000;">tensor(arr)</font><font style="color:#000000;"> </font><font style="color:#000000;">通常会复制一份数据</font>

### <font style="color:#000000;">5. 张量运算</font>
+ <font style="color:#000000;">基本运算：</font>
    - <font style="color:#000000;">+</font><font style="color:#000000;">、</font><font style="color:#000000;">-</font><font style="color:#000000;">、</font><font style="color:#000000;">*</font><font style="color:#000000;">、</font><font style="color:#000000;">/</font>
+ <font style="color:#000000;">函数写法：</font>
    - <font style="color:#000000;">add()</font><font style="color:#000000;">、</font><font style="color:#000000;">mul()</font><font style="color:#000000;">、</font><font style="color:#000000;">neg()</font>
+ <font style="color:#000000;">原地修改：</font>
    - <font style="color:#000000;">add_()</font><font style="color:#000000;">、</font><font style="color:#000000;">mul_()</font><font style="color:#000000;"> </font><font style="color:#000000;">等</font>
    - <font style="color:#000000;">带下划线的方法通常表示直接修改原张量</font>

**<font style="color:#000000;">6. 点乘和矩阵乘法</font>**

+ <font style="color:#000000;">A * B</font><font style="color:#000000;">：对应位置相乘</font>
+ <font style="color:#000000;">A @ B</font><font style="color:#000000;">：矩阵乘法</font>
+ <font style="color:#000000;">区别：</font>
    - <font style="color:#000000;">*</font><font style="color:#000000;"> </font><font style="color:#000000;">要求形状通常一致</font>
    - <font style="color:#000000;">@</font><font style="color:#000000;"> </font><font style="color:#000000;">要求前一个张量的列数等于后一个张量的行数</font>

### <font style="color:#000000;">7. 计算函数</font>
+ <font style="color:#000000;">常用函数：</font>
    - <font style="color:#000000;">sum()</font><font style="color:#000000;">：求和</font>
    - <font style="color:#000000;">mean()</font><font style="color:#000000;">：平均值</font>
    - <font style="color:#000000;">min()</font><font style="color:#000000;">：最小值</font>
    - <font style="color:#000000;">sqrt()</font><font style="color:#000000;">：开平方</font>
    - <font style="color:#000000;">log2()</font><font style="color:#000000;">：以 2 为底取对数</font>
+ <font style="color:#000000;">dim</font><font style="color:#000000;"> </font><font style="color:#000000;">的意义：</font>
    - <font style="color:#000000;">sum(dim=0)</font><font style="color:#000000;">：按列计算</font>
    - <font style="color:#000000;">sum(dim=1)</font><font style="color:#000000;">：按行计算</font>

### <font style="color:#000000;">8. 索引操作</font>
+ <font style="color:#000000;">取一行：</font><font style="color:#000000;">t[1]</font>
+ <font style="color:#000000;">取一列：</font><font style="color:#000000;">t[:, 2]</font>
+ <font style="color:#000000;">取单个元素：</font><font style="color:#000000;">t[2, 1]</font>
+ <font style="color:#000000;">切片：</font><font style="color:#000000;">t[:2, :2]</font>
+ <font style="color:#000000;">列表索引：</font><font style="color:#000000;">t[[0,1], [1,2]]</font>
+ <font style="color:#000000;">布尔索引：</font><font style="color:#000000;">t[t[:, 3] > 10, :]</font>
+ <font style="color:#000000;">核心规则：</font>
    - <font style="color:#000000;">下标从</font><font style="color:#000000;"> </font><font style="color:#000000;">0</font><font style="color:#000000;"> </font><font style="color:#000000;">开始</font>
    - <font style="color:#000000;">t[i, j]</font><font style="color:#000000;"> </font><font style="color:#000000;">表示第</font><font style="color:#000000;"> </font><font style="color:#000000;">i</font><font style="color:#000000;"> </font><font style="color:#000000;">行第</font><font style="color:#000000;"> </font><font style="color:#000000;">j</font><font style="color:#000000;"> </font><font style="color:#000000;">列</font>

### <font style="color:#000000;">9. 形状改变</font>
+ <font style="color:#000000;">查看形状：</font>
    - <font style="color:#000000;">t.shape</font>
    - <font style="color:#000000;">t.size()</font>
+ <font style="color:#000000;">改形状：</font><font style="color:#000000;">reshape(...)</font>
+ <font style="color:#000000;">自动推断：</font><font style="color:#000000;">reshape(-1, ...)</font>
+ <font style="color:#000000;">升维：</font><font style="color:#000000;">unsqueeze(dim)</font>
+ <font style="color:#000000;">降维：</font><font style="color:#000000;">squeeze()</font>
+ <font style="color:#000000;">交换维度：</font>
    - <font style="color:#000000;">transpose(dim0, dim1)</font><font style="color:#000000;">：交换两个维度</font>
    - <font style="color:#000000;">permute(...)</font><font style="color:#000000;">：重排多个维度</font>
+ <font style="color:#000000;">重点：</font>
    - <font style="color:#000000;">改形状时，元素总数不能变</font>

### <font style="color:#000000;">10. 张量拼接</font>
+ <font style="color:#000000;">torch.cat([...], dim=...)</font>
    - <font style="color:#000000;">沿已有维度拼接</font>
    - <font style="color:#000000;">dim=0</font><font style="color:#000000;">：上下拼</font>
    - <font style="color:#000000;">dim=1</font><font style="color:#000000;">：左右拼</font>
+ <font style="color:#000000;">torch.stack([...])</font>
    - <font style="color:#000000;">新增一个维度再叠起来</font>
    - <font style="color:#000000;">要求所有张量形状完全一致</font>

### <font style="color:#000000;">11. 高频易错点</font>
+ <font style="color:#000000;">torch.tensor(...)</font><font style="color:#000000;"> </font><font style="color:#000000;">和</font><font style="color:#000000;"> </font><font style="color:#000000;">torch.Tensor(...)</font><font style="color:#000000;"> </font><font style="color:#000000;">不要混</font>
+ <font style="color:#000000;">arange</font><font style="color:#000000;"> </font><font style="color:#000000;">和</font><font style="color:#000000;"> </font><font style="color:#000000;">linspace</font><font style="color:#000000;"> </font><font style="color:#000000;">区别要记清</font>
+ <font style="color:#000000;">*</font><font style="color:#000000;"> </font><font style="color:#000000;">和</font><font style="color:#000000;"> </font><font style="color:#000000;">@</font><font style="color:#000000;"> </font><font style="color:#000000;">完全不是一回事</font>
+ <font style="color:#000000;">sum(dim=0)</font><font style="color:#000000;"> </font><font style="color:#000000;">是按列，</font><font style="color:#000000;">sum(dim=1)</font><font style="color:#000000;"> </font><font style="color:#000000;">是按行</font>
+ <font style="color:#000000;">from_numpy()</font><font style="color:#000000;"> </font><font style="color:#000000;">和</font><font style="color:#000000;"> </font><font style="color:#000000;">tensor(arr)</font><font style="color:#000000;"> </font><font style="color:#000000;">的内存共享不同</font>
+ <font style="color:#000000;">squeeze</font><font style="color:#000000;"> </font><font style="color:#000000;">是删长度为 1 的维度，</font><font style="color:#000000;">unsqueeze</font><font style="color:#000000;"> </font><font style="color:#000000;">是加长度为 1 的维度</font>
+ <font style="color:#000000;">cat</font><font style="color:#000000;"> 是拼接，</font><font style="color:#000000;">stack</font><font style="color:#000000;"> 是新增维度后堆叠</font>

