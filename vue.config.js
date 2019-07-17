module.exports = {
    devServer: {
        host: '0.0.0.0',
    port: 8888,
       // host: '127.0.0.1',
       // disableHostCheck: true,
        proxy: {//ajax跨域代理
            '/api': {
                target: 'https://www.runoob.com',  //目标接口域名
                changeOrigin: true,  //是否跨域
              //  ws:true,
                pathRewrite: {
                    '^/api': ''   //重写接口
                }
            }
        }
    }
}