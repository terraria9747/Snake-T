// 导包 - 路径
let path = require("path")
// 自动生成Html文件
let HtmlWebpackPlugin = require("html-webpack-plugin")
// 清除dist目录
let { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
	// 指定入口文件
	entry: "./src/index.ts",

	// 指定打包文件所在目录
	output: {
		// 打包文件
		path: path.resolve(__dirname, "dist"),
		// 打包后的文件名
		filename: "bundle.js",
		environment: {
			arrowFunction: false // 关闭webpack的箭头函数，可选
		}
	},

	// 打包用的模块
	module: {
		// 加载规则
		rules: [
			{
				// 规则生效的文件
				test: /\.ts$/,
				// 使用的loader
				use: [
					// 配置babel
					{
						// 指定加载器
						loader: "babel-loader",
						options: {
							// 设置预定义的环境
							presets: [
								[
									// 指定环境的插件
									"@babel/preset-env",
									// 配置信息
									{
										// 兼容的目标浏览器
										"targets": {
											"chrome": "88",
											"ie": "11",
										},

										// 指定的corejs版本
										"corejs": "3",
										// 使用corejs的方式 "usage" 按需加载
										"useBuiltIns": "usage"
									}
								]
							]
						}
					},
					{
						loader: "ts-loader",
					}
				],
				// 排除的文件
				exclude: /node_modules/,
			},

			// 设置less文件的处理
			{
				test: /\.less$/,
				use: [
					"style-loader",
					"css-loader",
					// 引入 postcss 处理 css不兼容问题
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										// 浏览器配置环境
										"postcss-preset-env",
										{
											browsers: "last 2 versions"
										}
									]
								]
							}
						}
					},
					"less-loader",
				]
			}
		]
	},

	// 配置插件
	plugins: [
		// 自动生成 Html 文件
		new HtmlWebpackPlugin({
			title: "哈哈",
			template: "src/index.html"
		}),

		// 清除dist目录
		new CleanWebpackPlugin(),
	],

	resolve: {
		extensions: [".ts", ".js"]
	}
}