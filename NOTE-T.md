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
  
# 10.蛇撞墙
1. 谁撞的墙 -- 谁去处理
2. snake.ts 如果新值和旧值一致, 则直接返回不修改
3. 判断是否撞墙 X的合法范围是 0-290
4. 如果超出范围, 抛出异常
5. gamecontrol try{} catch{}捕获异常
6. 弹窗提示, 并isLive设为false

# 11.吃食检测
1. 检测蛇是否吃到了食物 checkEat()方法
2. 如果蛇的坐标与食物的坐标一致 -- 吃到了食物
3. 食物被吃到后
   - 食物位置发生改变 -- this.food.change()
   - 分数增加 -- this.scorePanel.addScore()
   - 蛇增加一节 -- this.snake.addBody()

# 12.身体的移动
1. 定义蛇移动的方法 moveBody(){}
2. X轴和Y轴位置变化时触发 moveBody(){}
3. 将后面的身体设置为前边身体的位置
4. 例子:
	- 第四节 = 第三节位置
	- 第三节 = 第二节位置
	- 第二节 = 蛇头位置
5. 遍历获取所有的身体
6. 获取前边身体的位置
7. 将值设置到当前身体上

# 13.蛇撞到自己
1. 蛇头坐标与身体的每一节的坐标是否重复
2. 定义checkHeadBody方法 | 修改蛇的坐标之后调用
3. 获取所有的身体
4. 判断蛇头坐标(this.X | this.Y)与身体的每一节的坐标(bd.offsetLeft | bd.offsetTop)是否重复
