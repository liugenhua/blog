### **<font style="color:#000000;">1. 激活函数</font>**
+ <font style="color:#000000;">作用：给神经网络增加非线性表达能力</font>
+ <font style="color:#000000;">Sigmoid</font>
    - <font style="color:#000000;">输出范围：</font><font style="color:#000000;">(0, 1)</font>
    - <font style="color:#000000;">常用于：二分类输出层</font>
    - <font style="color:#000000;">缺点：容易梯度消失</font>
+ <font style="color:#000000;">Tanh</font>
    - <font style="color:#000000;">输出范围：</font><font style="color:#000000;">(-1, 1)</font>
    - <font style="color:#000000;">常用于：隐藏层</font>
    - <font style="color:#000000;">缺点：也可能梯度消失</font>
+ <font style="color:#000000;">ReLU</font>
    - <font style="color:#000000;">规则：负数变 0，正数保留</font>
    - <font style="color:#000000;">常用于：隐藏层</font>
    - <font style="color:#000000;">优点：训练快，收敛稳</font>
+ <font style="color:#000000;">Softmax</font>
    - <font style="color:#000000;">作用：把输出分数转成概率分布</font>
    - <font style="color:#000000;">常用于：多分类输出层</font>

### **<font style="color:#000000;">2. 参数初始化</font>**
+ <font style="color:#000000;">作用：决定训练起点是否合理</font>
+ <font style="color:#000000;">weight</font><font style="color:#000000;"> </font><font style="color:#000000;">不能全一样，否则会有对称性问题</font>
+ <font style="color:#000000;">bias</font><font style="color:#000000;"> </font><font style="color:#000000;">一般可以初始化为 0</font>
+ <font style="color:#000000;">常见初始化：</font>
    - <font style="color:#000000;">Xavier</font><font style="color:#000000;">：适合</font><font style="color:#000000;"> </font><font style="color:#000000;">Sigmoid / Tanh</font>
    - <font style="color:#000000;">Kaiming</font><font style="color:#000000;">：适合</font><font style="color:#000000;"> </font><font style="color:#000000;">ReLU</font>
+ <font style="color:#000000;">工程结论：</font>
    - <font style="color:#000000;">隐藏层用</font><font style="color:#000000;"> </font><font style="color:#000000;">ReLU</font><font style="color:#000000;"> </font><font style="color:#000000;">时优先考虑</font><font style="color:#000000;"> </font><font style="color:#000000;">Kaiming</font>
    - <font style="color:#000000;">Sigmoid/Tanh</font><font style="color:#000000;"> </font><font style="color:#000000;">时优先考虑</font><font style="color:#000000;"> </font><font style="color:#000000;">Xavier</font>

### **<font style="color:#000000;">3. 搭建基础神经网络</font>**
+ <font style="color:#000000;">自定义网络要继承</font><font style="color:#000000;"> </font><font style="color:#000000;">nn.Module</font>
+ <font style="color:#000000;">__init__()</font><font style="color:#000000;">：</font>
    - <font style="color:#000000;">定义网络结构</font>
    - <font style="color:#000000;">定义各层</font>
    - <font style="color:#000000;">做参数初始化</font>
+ <font style="color:#000000;">forward()</font><font style="color:#000000;">：</font>
    - <font style="color:#000000;">定义数据前向传播路径</font>
+ <font style="color:#000000;">基本流程：</font>
    - <font style="color:#000000;">线性层 -> 激活函数 -> 线性层 -> 激活函数 -> 输出层</font>
+ <font style="color:#000000;">my_model(data)</font><font style="color:#000000;"> </font><font style="color:#000000;">本质会调用</font><font style="color:#000000;"> </font><font style="color:#000000;">forward(data)</font>

### **<font style="color:#000000;">4. 损失函数</font>**
+ <font style="color:#000000;">作用：衡量模型错了多少</font>
+ <font style="color:#000000;">分类损失：</font>
    - <font style="color:#000000;">CrossEntropyLoss</font>
        * <font style="color:#000000;">多分类常用</font>
        * <font style="color:#000000;">输入通常是</font><font style="color:#000000;"> </font><font style="color:#000000;">logits</font>
        * <font style="color:#000000;">y_true</font><font style="color:#000000;"> </font><font style="color:#000000;">用类别编号，类型</font><font style="color:#000000;"> </font><font style="color:#000000;">long</font>
    - <font style="color:#000000;">BCELoss</font>
        * <font style="color:#000000;">二分类常用</font>
        * <font style="color:#000000;">输入是概率值，通常前面先过</font><font style="color:#000000;"> </font><font style="color:#000000;">sigmoid</font>
+ <font style="color:#000000;">回归损失：</font>
    - <font style="color:#000000;">MSELoss</font>
        * <font style="color:#000000;">均方误差</font>
        * <font style="color:#000000;">对大误差更敏感</font>
    - <font style="color:#000000;">L1Loss</font>
        * <font style="color:#000000;">平均绝对误差</font>
        * <font style="color:#000000;">对离群点更稳</font>
    - <font style="color:#000000;">SmoothL1Loss</font>
        * <font style="color:#000000;">L1 和 L2 的折中</font>

### **<font style="color:#000000;">5. 优化算法</font>**
+ <font style="color:#000000;">作用：根据梯度更新参数</font>
+ <font style="color:#000000;">核心公式：</font>
    - <font style="color:#000000;">新参数 = 旧参数 - 学习率 × 梯度</font>
+ <font style="color:#000000;">训练标准流程：</font>
    - <font style="color:#000000;">optimizer.zero_grad()</font>
    - <font style="color:#000000;">loss.backward()</font>
    - <font style="color:#000000;">optimizer.step()</font>
+ <font style="color:#000000;">常见优化器：</font>
    - <font style="color:#000000;">SGD</font><font style="color:#000000;">：基础</font>
    - <font style="color:#000000;">Momentum</font><font style="color:#000000;">：加惯性，减少震荡</font>
    - <font style="color:#000000;">Adagrad</font><font style="color:#000000;">：自适应学习率，但后期可能太小</font>
    - <font style="color:#000000;">RMSprop</font><font style="color:#000000;">：改进 Adagrad</font>
    - <font style="color:#000000;">Adam</font><font style="color:#000000;">：最常用，实战优先试</font>

### **<font style="color:#000000;">6. 学习率衰减</font>**
+ <font style="color:#000000;">作用：训练前期快，后期稳</font>
+ <font style="color:#000000;">为什么需要：</font>
    - <font style="color:#000000;">学习率太大容易震荡</font>
    - <font style="color:#000000;">学习率太小收敛太慢</font>
+ <font style="color:#000000;">常见方式：</font>
    - <font style="color:#000000;">StepLR</font>
        * <font style="color:#000000;">固定间隔衰减</font>
    - <font style="color:#000000;">MultiStepLR</font>
        * <font style="color:#000000;">指定轮次衰减</font>
    - <font style="color:#000000;">ExponentialLR</font>
        * <font style="color:#000000;">每轮按比例衰减</font>
+ <font style="color:#000000;">核心思想：</font>
    - <font style="color:#000000;">学习率通常不是固定不变的</font>

### **<font style="color:#000000;">7. 正则化</font>**
+ <font style="color:#000000;">作用：防止过拟合，提高泛化能力</font>
+ <font style="color:#000000;">Dropout</font>
    - <font style="color:#000000;">训练时随机丢弃部分神经元</font>
    - <font style="color:#000000;">防止模型过度依赖局部特征</font>
+ <font style="color:#000000;">BatchNorm</font>
    - <font style="color:#000000;">稳定每层输入分布</font>
    - <font style="color:#000000;">加快训练，提高稳定性</font>
+ <font style="color:#000000;">BatchNorm1d</font>
    - <font style="color:#000000;">处理向量/文本特征</font>
+ <font style="color:#000000;">BatchNorm2d</font>
    - <font style="color:#000000;">处理图像数据</font>
+ <font style="color:#000000;">BatchNorm3d</font>
    - <font style="color:#000000;">处理视频/体数据</font>

### **<font style="color:#000000;">8. 整体主线</font>**
+ <font style="color:#000000;">激活函数：让网络有非线性能力</font>
+ <font style="color:#000000;">参数初始化：决定训练起点</font>
+ <font style="color:#000000;">损失函数：衡量错误</font>
+ <font style="color:#000000;">优化器：更新参数</font>
+ <font style="color:#000000;">学习率衰减：控制训练节奏</font>
+ <font style="color:#000000;">正则化：防过拟合</font>

