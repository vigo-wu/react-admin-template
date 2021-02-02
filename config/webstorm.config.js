'use strict'
const path = require('path')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@@': pathResolve('.'),
      '@': pathResolve('src'),
    }
  }
}
