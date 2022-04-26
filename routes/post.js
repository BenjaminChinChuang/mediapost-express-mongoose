const Express = require('express')
const router = Express.Router()
const $POST = require('../apis/posts')

router.get('/', $POST.GET)
router.post('/', $POST.POST)
router.delete('/', $POST.DELETE_ALL)
router.delete('/:id', $POST.DELETE)
router.patch('/:id', $POST.PATCH)
router.options('/', $POST.OPTIONS)

module.exports = router
