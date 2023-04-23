const router = require('express').Router()
const Controller = require('./controller')

const controller = new Controller()

router.get('/', controller.list)
router.get('/:id', controller.get)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router