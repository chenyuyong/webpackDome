const path = require('path');
// 1、导入html插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 2、创建html插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template:'./src/index.html', //指定源文件的存放路径
    filename: './index.html' // 指定生成文件的存放路径
})
module.exports = {
    // 代表webpack运行的模式，development与production
    mode:'development',
    /*设置要打包的源文件*/
    entry: path.join(__dirname, './src/main.js'),
    /*设置打包后的路径及输出文件名*/
    output: {
        /*输出路径，__dirname 为当前文件所在目录所在的路径*/
        path: path.join(__dirname, 'dist'),
        /*输出文件名*/
        filename: 'bundle.js'
    },
    plugins: [htmlPlugin], // 通过plugins节点，使htmlPlugin插件生效
   
};