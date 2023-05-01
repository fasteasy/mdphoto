const { ForbiddenError } = require('../../error')
const { User } = require('../../db/models')

const user = {
  role: 'superadmin',
  name: 'Admin',
}

module.exports = class AuthController {
  async signup (req, res, next) {
    try {
      const user = await User.create(req.body)
      res.json(user)
    } catch (e) {
      next(e)
    }
  }

  whoami (req, res) {
    res.json(user)
  }

  signin (req, res, next) {
    const { username, password } = req.body
    if (username === 'admin' && password === 'admin') {
      res.json({ ok: true })
    } else {
      next(new ForbiddenError())
    }
  }

  signout (req, res) {
    res.json({ ok: true })
  }
} 