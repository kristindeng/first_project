const {defineConfig} = require('@vue/cli-service')
//js采取的同源策略
//同源策略是浏览器的一项安全策略，策略只允许js代码请求和当前所在服务器域名，端口，协议相同的数据接口上的数据
//当协议、域名、端口任意一个不相同时，都会产生跨域问题
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://iwenwiki.com',
                changeOrigin: true,
            }
        }
    }
})
