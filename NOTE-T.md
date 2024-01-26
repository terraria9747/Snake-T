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
1.获取蛇的div信息, 获取蛇头信息, 获取蛇身体信息
2.获取蛇头坐标
3.设置蛇头坐标 -- 
4.增加蛇的身体