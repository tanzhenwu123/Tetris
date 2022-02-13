const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
    mode:'development',
    // 入口文件
    entry: './src/index.js',
    // 出口文件
    output: {
        // 路径
        path:path.resolve("./dist"),
        // 文件名
        filename:'script/bundle.js'
    },
    plugins:[
        // html文件打包路径
        new htmlPlugin({
            template:'./public/index.html'
        }),
        // 安装前删除未引用文件
        new CleanWebpackPlugin()
    ]
}