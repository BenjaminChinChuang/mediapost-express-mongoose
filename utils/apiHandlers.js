const header = require('./generateHeader')

/** 成功
 * @param res response
 * @param data custom data to send
 */
const successHandle = (res, data = {}) => {
  res.set(header())
  res.status(200).json({
    status: 'success',
    ...data,
  })
}

/** request fail
 * @param errorCode default status code is 400
 * @param errorData custom error to send
 */
const errorHandle = (errorCode = 400, errorData = {}) => ({
  statusCode: errorCode,
  status: 'fail',
  ...errorData,
})

module.exports = {successHandle, errorHandle}
