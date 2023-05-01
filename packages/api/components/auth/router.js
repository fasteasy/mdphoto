const router = require('express').Router()
const Controller = require('./controller')

const controller = new Controller()

router.get('/whoami', controller.whoami)
router.post('/signup', controller.signup)
router.post('/signin', controller.signin)
router.post('/signout', controller.signout)

module.exports = router