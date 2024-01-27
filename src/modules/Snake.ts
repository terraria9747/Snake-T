// Snake

class Snake {
	// 蛇头
	head: HTMLElement;
	// 蛇身体
	bodies: HTMLCollection;
	// 蛇信息
	element: HTMLElement;

	constructor() {
		// 获取蛇的信息
		this.element = document.getElementById("snake")!
		// as HTMLElement 类型断言
		// 蛇头 -- 第一个div盒子
		this.head = document.querySelector("#snake > div")! as HTMLElement;
		// 蛇身体
		this.bodies = this.element.getElementsByTagName("div");
	}

	// 获取蛇头的坐标
	get X() {
		return this.head.offsetLeft;
	}

	get Y() {
		return this.head.offsetTop;
	}

	// 设置蛇头坐标
	set X(value: number) {
		this.head.style.left = value + "px"
	}
	
	set Y(value: number) {
		this.head.style.top = value + "px"
	}

	// 增加蛇的身体
	addBody() {
		// 向element中添加一个div
		this.element.insertAdjacentHTML("beforeend", "<div></div>")
	}
}

export default Snake