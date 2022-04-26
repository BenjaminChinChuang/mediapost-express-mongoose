const {successHandle, errorHandle} = require('../../utils/apiHandlers')
const errorMsgGenerator = require('../../utils/errorMsgGenerator')
const Post = require('../../models/post')

const PATCH = async (req, res, next) => {
  const ID = req.params.id
  try {
    const data = req.body
    const posts = await Post.findByIdAndUpdate(
      ID,
      {...data},
      {returnDocument: 'after'}
    )
    successHandle(res, {data: posts})
  } catch (error) {
    let msg = `ID: '${ID}' is not exsit.`
    if (error?.errors) {
      msg = errorMsgGenerator(error)
    }
    next(errorHandle(400, {data: msg}))
  }
}

module.exports = PATCH
