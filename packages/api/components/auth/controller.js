const { ForbiddenError } = require('../../error')

const user = {
  role: 'superadmin',
  name: 'Admin',
}

module.exports = class AuthController {
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