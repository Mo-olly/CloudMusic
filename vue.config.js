const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,    //默认的vue语法校验很严格，取消校验
  publicPath:process.env.NODE_ENV === 'production' ? './' : '/',
})
