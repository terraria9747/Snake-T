// Snake

// 蛇头和蛇身体
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
		// 如果旧值和新值相同, 则直接返回不再修改
		if (this.X === value) {
			return;
		}

		// X坐标的合法值为 0-290
		if (value < 0 || value > 290) {
			// 不在范围内抛出异常
			throw new Error("🐍蛇撞墙了");
		}

		// 禁止掉头
		// 如果存在第二节 并且 第二节的位置等于 新值
		if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
			console.log("水平方向禁止掉头");
			// 如果新值 大于 x轴旧的坐标 -- 表示 向右走
			if (value > this.X) {
				value = this.X - 10
			} else {
				value = this.X + 10
			}
		}

		// 移动蛇的身体
		this.moveBody()

		this.head.style.left = value + "px"

		// 蛇撞自己
		this.checkHeadBody()
	}
	
	set Y(value: number) {
		// 如果新值和旧值相同, 则直接返回不再修改
		if (this.Y === value) {
			return;
		}

		// X坐标的合法值为 0-290
		if (value < 0 || value > 290) {
			// 不在范围内抛出异常
			throw new Error("🐍蛇撞墙了");
		}

		// 禁止掉头
		// 如果存在第二节 并且 第二节的位置等于 新值
		if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
			console.log("垂直方向禁止掉头");
			// 如果新值 大于 y轴旧的坐标 -- 表示 向下走
			if (value > this.Y) {
				value = this.Y - 10
			} else {
				value = this.Y + 10
			}
		}

		// 移动蛇的身体
		this.moveBody()

		this.head.style.top = value + "px"

		// 蛇撞自己
		this.checkHeadBody()
	}

	// 增加蛇的身体
	addBody() {
		// 向element中添加一个div
		this.element.insertAdjacentHTML("beforeend", "<div></div>")
	}

	// 移动蛇的身体
	moveBody() {
		console.log("蛇身体长度", this.bodies.length);

		// 将后面的身体设置为前边身体的位置
		// 例子:
			  // 第四节 = 第三节位置
			  // 第三节 = 第二节位置
			  // 第二节 = 蛇头位置
		
		// 遍历获取所有的身体 -- 从后往前遍历
		for (let i = this.bodies.length-1; i > 0; i--) {
			// 获取前面身体的位置坐标
			let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
			let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

			// 将值设置到当前身体上
			(this.bodies[i] as HTMLElement).style.left = X + "px";
			(this.bodies[i] as HTMLElement).style.top = Y + "px";
		}
	}

	// 检查蛇是否撞到自己
	checkHeadBody() {
		// 获取所有的身体
		for (let i = 1; i < this.bodies.length; i++) {
			let bd = this.bodies[i] as HTMLElement;
			if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
				throw new Error("🐍蛇撞到自己了, Game Over!!!");
			}
		}
	}
}

export default Snake