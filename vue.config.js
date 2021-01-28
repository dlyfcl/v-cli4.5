var path = require("path");
module.exports = {
    devServer: {
        // 项目运行时候的端口号
        port: 8083,
        https: false, // https:{type:Boolean}
        proxy: {
            '/api': {
                target: 'http://192.168.1.115:8080/ZZYQ',//跨域接口的地址
                changeOrigin: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },
    outputDir: "test",
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }

        Object.assign(config, {
            // 开发生产共同配置
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
                    public: path.resolve(__dirname, "./public"),
                }
            }
        });
    },

    publicPath: process.env.NODE_ENV === 'production' ?
        './' : '/',

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            // path.resolve(__dirname, 'src/assets/scss/style.scss')
            patterns: [path.resolve(__dirname, 'src/assets/scss/style.scss')]
        }
    },

    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false
}