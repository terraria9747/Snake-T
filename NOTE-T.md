# 1.项目初始化
1. 引入webpack配置
2. 安装相关包
3. 安装css相关包
```
npm i -D less less-loader css-loader style-loader
```
4. 处理css兼容
```
npm i -D postcss postcss-loader postcss-preset-env
```

# 2.页面布局
html结构 + less样式

# 3.Food类
1. 获取food元素
2. 获取x/y轴的坐标
3. 修改食物的位置

# 4.记分牌
1. 初始化分数和级别
2. 获取分数和级别的元素
3. 定义加分方法 - 调用一次, 加一分
4. 定义等级提升方法 - 每10分升一级(最高10级)

# 5.模块化
新建modules文件夹, 分别存放不同的类ts
注意: 导入和暴露ts文件

# 6.Snake类
1. 获取蛇的div信息, 获取蛇头信息, 获取蛇身体信息
2. 获取蛇头坐标
3. 设置蛇头坐标 -- 
4. 增加蛇的身体

# 7.游戏整合文件
1. 新建文件GameControl
2. 导入其他三个类(snake, food, scorePanel)
3. 定义一个GameControl游戏控制器的类
4. 定义三个属性
5. 构造函数创建三个实例

# 8.游戏初始化
1. 定义一个init方法, 在创建实例时调用
2. 游戏初始化时 - 绑定键盘事件, 获取键盘按键

# 9.蛇移动
1. 本质是修改蛇的偏移量
2. 创建蛇移动的方法 run()方法
3. 根据方向 ↑ ↓ ← → 来使蛇的位置改变
4. 创建X和Y属性 用来存储偏移量坐标
5. switch case 判断
   	↑ ArrowUp top-
		↓ ArrowDown top+
		← ArrowLeft left-
		→ ArrowRight left+
6. 计算出X和Y的偏移后重新赋值
7. 游戏初始化时调用	run()方法
8. 创建一个属性 来记录游戏是否结束