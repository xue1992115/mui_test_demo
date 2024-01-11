/*
 * @Author: hxx
 * @Date: 2024-01-10 17:36:43
 * @LastEditors: hxx
 * @LastEditTime: 2024-01-11 10:29:39
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  assetsDir: 'static',
})
