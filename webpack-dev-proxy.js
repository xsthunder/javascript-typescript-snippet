
module.exports = {

  devServer: {

    port: 8000,
    proxy: {
      '/api/':{
        target:'http://172.1.1.1:8000/api/',
        pathRewrite: {'^/api/' : ''},// rewrite prefix '/api/' to ''
        ws: false,
        changeOrigin: true,
        logLevel:'debug'
      },

}
