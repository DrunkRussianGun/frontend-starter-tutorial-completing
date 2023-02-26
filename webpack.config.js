const path = require("path");

module.exports = {
	entry: "./src/index.js",
	devtool: "source-map",
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, use: ["babel-loader", "eslint-loader"] }
		]
	},
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "build"),
		publicPath: "build"
	},
};
