var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  api_path:'https://api.mxlg369.com/api',
  user_sys:'admin'
})
