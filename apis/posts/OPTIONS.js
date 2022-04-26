const header = require('../../utils/generateHeader')

const OPTIONS = (req, res) => {
  res.set(header())
  res.status(200).send()
}

module.exports = OPTIONS
