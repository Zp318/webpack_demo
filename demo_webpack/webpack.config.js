var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	entry:"./src/script/entry.js",
	output:{
		path:__dirname + "/dist",
		filename:"js/entry.bundle.js"
		// publicPath:"http://cdn.com"
	},
	module:{
		rules:[
			{
				test:/.css$/,
				// loader:"style-loader!css-loader!postcss-loader"
				use: [
					'style-loader', 
					'css-loader',
					{ 
						loader:'postcss-loader',options:{ broswers: ['last 5 versions'] }
					}
				]
			},
			{
				test:/.js$/,
				loader:"babel-loader",
				query:{
					presets:['latest']
				},
				include:__dirname+"./src",                       //路径写法一
				exclude:path.resolve(__dirname,'node_modules')   //路径写法二
			},
			{
				test:/.html$/,
				loader:"html-loader"
			},
			{
				test:/.(png|jpg|jpeg|gif|svg)$/i,
				loaders:[
					"url-loader?limit=20000&name=assets/[name].[ext]"
				 //   {
				 //        loader: 'image-webpack-loader',
				 //        query: {
				 //          	progressive: true,
				 //          	optimizationLevel: 7,
				 //          	interlaced: false,
				 //          	pngquant: {
				 //           	 	quality: '65-90',
				 //            	speed: 4
				 //          	}
				 //        }
				 //    }
				]
				// loader:"url-loader",
				// query:{
				// 	limit:40000,                  //使用limit属性时，要使用url-loader（当在模板中使用图片时，图片路径使用require）
				// 	name:'./assets/[name].[ext]'
				// }
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			template:"template.html",
			filename: 'compile.html',
	      	title:'My App',
	      	data:'html-webpack-plugin插件中定义的参数',
	      	// inject:"head", // script标签一般放在尾部，否则可能影响到程序的执行
	      	favicon:"./src/images/favicon.png",
	      	minify:{
	      		removeComments:true,
	      		collapseWhitespace:true
	      	}
	    })
	]
}