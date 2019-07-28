module.exports = {
    devServer: {
            open: true, //浏览器自动打开页面
            host: "localhost", //本地服务器访问的路径
            port: 8080, //本地服务器访问的端口
        proxy: {
        '/api': {
        target: "http://localhost:8080",
            ws: true,
            changeOrigin: true,
            pathRewrite: {
            '^/api': '/mock'  //通过pathRewrite重写地址，将前缀/api转为/
            }
        }
        }
        }
}