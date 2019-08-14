module.exports = {
  publicPath: '/vue/lottery/',
  outputDir: './vue/lottery',
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api_pro': {
        target: 'http://192.168.199.109',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      },
      '/api_dev': {
        target: 'http://192.168.199.109',
        pathRewrite: {
          '^/api_dev': ''
        },
        changeOrigin: true
      }
    }
  },
}
