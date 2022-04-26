const errorLogger = (error, req, res, next) => {
  console.error('\x1b[31m', error) // adding some color to our logs
  next(error)
}

const errorResponse = (error, req, res, next) => {
  const {statusCode, status, data} = error
  res.status(statusCode).json({status, data})
}

const invalidPathHandler = (req, res) => {
  res.status(404).json({
    status: 'fail',
    data: `The URL you are trying to reach does not exist.`,
  })
}

module.exports = {errorLogger, errorResponse, invalidPathHandler}
