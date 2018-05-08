const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const Webpack = require('webpack')
module.exports = {
	entry:'./src/index.js',
	output:{
		filename:"js/app.js",
		path:path.resolve('dist'),
		publicPath:'/dist/'
	},
	mode:"development",
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:'babel-loader',
			},
			{
				test:/\.css/,
				use:ExtractTextWebpackPlugin.extract({
					use:'css-loader'
				})
			},
			{
				test:/\.scss$/,
				use:ExtractTextWebpackPlugin.extract({
					use:['css-loader','sass-loader']
				})
			},
			{
				test:/\.(eot|ttf|woff|svg)/,
				use:[
					{
						loader:'file-loader',
						options:{
							limit:8192,
							name:'resource/[name].[ext]'
						}
					}
				]
			},
			{
				test:/\.(png|jpg|gif)$/,
				use:[
					{
						loader:"url-loader",
						options:{
							limit:8192,
							name:'resource/[name].[ext]'
						}

					}
				]
			},
			{
				test:/\.(htm|html)/,
				use:'html-withimg-loader'
			}
		]
	},
	plugins:[
		//处理html的文件
		new HtmlWebpackPlugin({
			template:'./src/index.html',
			hash:true
		}),
		//可以外部引入css
		new ExtractTextWebpackPlugin('css/[name].css'),
		//热替换
		new Webpack.HotModuleReplacementPlugin()
	],
	devServer:{
		contentBase:'./dist',
		port:8086,
		open:true,
		hot:true
	}
}