// 积分牌
class ScorePanel {
	// 初始化 分数和级别
	score = 0;
	level = 0;

	// 获取 分数和级别 元素
	scoreEle: HTMLElement;
	levelEle: HTMLElement;

	constructor() {
		this.scoreEle = document.getElementById("score")!;
		this.levelEle = document.getElementById("level")!;
	}

	// 加分方法
	addScore() {
		// 调用一次, 加一分
		this.score++;
		this.scoreEle.innerHTML = this.score + "";
		// 每10分升一级
		if (this.score % 10 === 0) {
			this.levelUp()
		}
	}

	// 等级提升
	levelUp() {
		// 最高10级
		if (this.level <= 10) {
			// 调用一次, 升一级
			this.level++;
			this.levelEle.innerHTML = this.level + "";
		}
	}
}

export default ScorePanel

// 测试
// const s = new ScorePanel()
// for (let i = 0; i < 10; i++) {
// 	s.addScore()
// }