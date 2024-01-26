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
	}

	// 键盘按下的响应函数
	keydownHandler(event: KeyboardEvent) {
		// console.log(event.key);
		this.direction = event.key
		console.log(this.direction);
	}
}

export default GameControl
