// 引入less
require("./style/index.less")

// 食物类
class Food {
	element: HTMLElement

	constructor() {
		// 获取food元素 | ! 指定元素不为空
		this.element = document.getElementById("food")!
	}

	// 获取x坐标
	get X() {
		return this.element.offsetLeft
	}

	// 获取y坐标
	get Y() {
		return this.element.offsetTop
	}

	// 修改食物的位置
	change() {
		let top = Math.round(Math.random() * 29) * 10
		let left = Math.round(Math.random() * 29) * 10

		this.element.style.top = top + "px";
		this.element.style.left = left + "px";
	}
}

// 测试食物的坐标
const food = new Food()
console.log("初始位置:", food.X, food.Y);

// 修改食物的位置
food.change()
console.log("随机位置:", food.X, food.Y);
