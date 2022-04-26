const {successHandle, errorHandle} = require('../../utils/apiHandlers')
const Post = require('../../models/post')

const DELETE = async (req, res, next) => {
  const ID = req.params.id
  try {
    await Post.findByIdAndDelete(ID)
    successHandle(res, {data: `${ID} is deleted successfully.`})
  } catch (error) {
    next(errorHandle(400, {data: `ID: '${ID}' is not exsit.`}))
  }
}
module.exports = DELETE
