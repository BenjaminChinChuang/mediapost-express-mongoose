const {successHandle, errorHandle} = require('../../utils/apiHandlers')
const Post = require('../../models/post')

const GET = async (req, res, next) => {
  try {
    const posts = await Post.find()
    successHandle(res, {data: posts})
  } catch (error) {
    next(errorHandle(400, {data: error}))
  }
}
module.exports = GET
