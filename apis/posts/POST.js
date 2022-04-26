const {successHandle, errorHandle} = require('../../utils/apiHandlers')
const errorMsgHandler = require('../../utils/errorMsgGenerator')
const Post = require('../../models/post')

const POST = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body)
    successHandle(res, {data: newPost})
  } catch (error) {
    next(errorHandle(400, {data: errorMsgHandler(error)}))
  }
}

module.exports = POST
