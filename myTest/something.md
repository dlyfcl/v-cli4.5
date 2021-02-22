# 一、 webpack的组成与介绍

1、webpack 是一个前端资源的模块打包器。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成少量的bundle - 通常只有一个，由浏览器加载。

2、他的主要组成是：入口(entry)、输出(output)、loader、插件(plugins)

# entry：入口是webpack创建应用的起点。每个html都应该有一个入口，spa项目有一个mpa则应该有多个

单个模式
module.exports = {
  entry: './src/index.js'
};

多个模式
module.exports = {
  entry: {
    main: './src/main.js'
    index:'./src/index.js'
  }
};

# output：输出是告诉webpack打包输出在哪里的设置

const path = require('path')  
module.exports = {
  output:{
    filename:'[name].js',  //使用占位符---这样写是根据原入口文件名称输出出口的文件名称。
    path:path.resolve(__dirname,'dist')  //输出到当前文件夹下的dist目录。   
  }
}

# loader：可以将文件源代码转换为模块。可以在import或"加载"模块时预处理文件。（4.0中改为rules）

 const path = require('path');
	module.exports = {
	  entry: './src/file.js',
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'my-first-webpack.bundle.js'
	  },
	  module: {
	    rules: [
	      { 
	        test: /\.txt$/,      //正则匹配文件。
	        use: 'raw-loader'   //安装raw-loader yarn add row-loader -D
	      }
	    ]
	  }
	};

# plugins：借助各种插件扩展webpack功能

  const HtmlWebpackPlugin = require('html-webpack-plugin');
	const webpack = require('webpack'); //webpack 内置的一些插件
	const path = require('path');

	const config = {
	  entry: './src/file.js',
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'my-first-webpack.bundle.js'
	  },
	  module: {
	    rules: [
	      { test: /\.txt$/, use: 'raw-loader' }
	    ]
	  },
	  plugins: [
	    new HtmlWebpackPlugin({template: './src/index.html'})  //模板使用的模板
	  ]
	};

# resolve：配置解析模块规则

extensions: 自动补充文件的后缀名
alias属性配置文件的别名

resolve: {
	extensions: [".js", ".vue", ".json", ".ts", ".tsx"],
	alias: {
		vue$: "vue/dist/vue.js",
		"@": path.resolve(__dirname, "./src"),
		"@c": path.resolve(__dirname, "./src/components"),
		utils: path.resolve(__dirname, "./src/utils"),
		views: path.resolve(__dirname, "./src/views"),
		assets: path.resolve(__dirname, "./src/assets"),
		com: path.resolve(__dirname, "./src/components"),
		store: path.resolve(__dirname, "./src/store"),
	}
}

# Mode： 模块化， 区分开发模式和生产模式。


# 二、 keep-alive的实现原理

keep-alive实现原理就是将对应的状态放入一个cache对象中，对应的dom节点放入缓存dom中，当下次再次需要渲染时，从对象中获取状态，从缓存dom中移出至挂载dom节点中。

# 三、vuex直接修改state 与 用commit提交mutation来修改state的差异

1）共同点： 能够修改state里的变量，并且是响应式的
2）不同点：
若将vue创建 store 的时候传入 strict: true, 开启严格模式，那么任何修改state的操作，只要不经过 mutation的函数都会报错

使用commit提交到mutation修改state的优点：
代码结构更清晰，可以复用代码，提高开发效率

# 四、对于MVVM的理解
model-view-view model的缩写
model代表数据模型，也可以在model中定义数据修改和操作的业务逻辑
view代表UI组件（视图），它负责数据模型转化成ui展现出来
ViewModel 监听模型数据的改变和控制视图行为、处理数据交互，简单理解就是一个同步View和Model的对象，连接Model和View
model和view没有直接的联系，通过view model来进行交互
model和view Model之间的交互是双向的，因此view数据的变化会同步到model中，而Model数据的变化也会立即反应到view上
view Model通过双向数据绑定把view层和model层连接了起来，而view和Model之间的同步工作完全是自动的，无需人为干涉，因此开发者只需要关注业务逻辑，不需要手动操作DOM，不需要关注数据状态的同步问题，复杂的数据状态维护完全由MVVM来统一管理

# 五、什么是生命周期
实例从创建到销毁的过程就是生命周期

