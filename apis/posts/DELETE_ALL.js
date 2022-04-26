const {successHandle, errorHandle} = require('../../utils/apiHandlers')
const Post = require('../../models/post')

const DELETE_ALL = async (req, res) => {
  try {
    await Post.deleteMany({})
    successHandle(res, {data: []})
  } catch (error) {
    next(errorHandle(400, {data: error}))
  }
}
module.exports = DELETE_ALL
