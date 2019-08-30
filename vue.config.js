const path = require('path')
// const apiMocker = require('mocker-api')

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    // 基本路径
    publicPath: process.env.BASE_URL,
    lintOnSave: false,
    // 链式配置
    chainWebpack: config => {
        config.resolve.alias
            .set('components', resolve('src/components'))
            .set('assets', resolve('src/assets'))
    },
    devServer: {
        open: true,
        host: '0.0.0.0',
        https: false,
        port: 8084,
        // proxy: {
        //     // 设置代理
        //     // proxy all requests starting with /api to jsonplaceholder
        //     'http://localhost:8081/': {
        //         target: 'http://www.quickcan.cn', //真实请求的目标地址
        //         changeOrigin: true,
        //         // pathRewrite: {
        //         //     '^http://localhost:8081/': ''
        //         // }
        //     }
        // },
        // before: (app) => {
        //     apiMocker(app, path.resolve('./src/mock/mock.js'))
        // }
    },
    pluginOptions: {

    }
};