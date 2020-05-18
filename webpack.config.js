
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},

			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}, 

			{
				test: /\.(png|gif|jpe$g)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]',
              limit: 4096,
              outputPath: 'assets',
						}
					}
				]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}