// 引入less
import "./style/index.less"

// 导入 Food.ts
import Food from "./modules/Food"

// 导入 ScorePanle.ts
import ScorePanel from "./modules/ScorePanel"

// 测试 Food =====================================
// 测试食物的坐标
const food = new Food()
console.log("初始位置:", food.X, food.Y);

// 修改食物的位置
food.change()
console.log("随机位置:", food.X, food.Y);

// 测试 ScorePanle =====================================
// 测试 分数和级别
const s = new ScorePanel()
for (let i = 0; i < 10; i++) {
	s.addScore()
}
