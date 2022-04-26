const Cookie = require('js-cookie')

function checkLogin(req, res, next) {
  const isLogin = Cookie.get('media_login')
  if (!isLogin) console.log('please login in.')

  next()
}

module.exports = checkLogin
