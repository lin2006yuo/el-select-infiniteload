const path = require('path')

const resolove = dir => path.join(__dirname, dir)

module.exports = {
    lintOnSave: false,
    // chainWebpack: config => {
    //     config.resolove.alias
    //         .set('@', resolove('src'))
    //         .set('_c', resolove('src/components'))
    // },
    //打包时不生产.map文件
    productionSourceMap: false,
    // devServer: {
    //     proxy: 'http://localhost:3000'
    // }
}