// GameControl 游戏控制入口
// 导入其他类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器, 控制其他所有的类
class GameControl {
	// 定义三个属性
	snake: Snake;
	food: Food;
	scorePanel: ScorePanel;
	// 存储蛇的移动方向(按键的方向)
	direction: string = ""
	// 游戏是否结束 蛇是否或者
	isLive = true;

	constructor() {
		// 构造函数创建三个实例
		this.snake = new Snake()
		this.food = new Food()
		this.scorePanel = new ScorePanel()

		// 初始化游戏
		this.init()
	}

	// 游戏初始化 - 绑定键盘事件, 获取键盘按键
	init() {
		document.addEventListener("keydown", this.keydownHandler.bind(this))
		// 谁调用了this, this就指向谁, 这里是document调用了
		// 但是我们需要 this 指向 keydownHandler, 这样才会将值存到 direction 中

		// 初始化时调用run方法 - 修改蛇的偏移量(位置)
		this.run()
	}

	// 键盘按下的响应函数
	keydownHandler(event: KeyboardEvent) {
		// console.log(event.key);
		this.direction = event.key
		console.log(this.direction);
		// ↑ ArrowUp top-
		// ↓ ArrowDown top+
		// ← ArrowLeft left-
		// → ArrowRight left+

	}

	// 修改蛇的偏移量
	run() {
		// 获取蛇的偏移量坐标
		let X = this.snake.X;
		let Y = this.snake.Y;

		// 根据按键 计算蛇的偏移
		switch(this.direction) {
			case "ArrowUp":
				Y -= 10;
				break
			case "ArrowDown":
				Y += 10;
				break
			case "ArrowLeft":
				X -= 10;
				break
			case "ArrowRight":
				X += 10;
				break
		}

		// 检查是否吃到了食物 - (X, Y)蛇的偏移量坐标
		this.checkEat(X, Y)

		try {
			// 重新赋值蛇的偏移
			this.snake.X = X;
			this.snake.Y = Y;
		} catch(e) {
			// 捕获异常
			alert(e);
			// 游戏结束
			this.isLive = false
		}
		
		// 蛇进行移动
		// 升级处理 -- 级别越高, 蛇移动速度越快 -- 定时器执行越快
		this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
	}

	// 吃食检测
	checkEat(X: number, Y: number) {
		// 如果蛇的坐标与食物的坐标一致 --> 吃食成功
		if (this.food.X === X && this.food.Y === Y) {
			// 食物位置改变
			this.food.change()
			// 分数增加
			this.scorePanel.addScore()
			// 蛇增加一节
			this.snake.addBody()
		}
	}
}

export default GameControl
