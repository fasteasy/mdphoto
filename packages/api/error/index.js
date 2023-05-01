const MSG_NOT_FOUND = 'not_found'
const MSG_FORBIDDEN = 'forbidden'

class NotFoundError extends Error {
  constructor (message = MSG_NOT_FOUND) {
    super(message)
    this.statusCode = 404
  }
}

class ForbiddenError extends Error {
  constructor (message = MSG_FORBIDDEN) {
    super(message)
    this.statusCode = 403
  }
}

const middleware = (error, req, res, next) => {
  if (!error) {
    next()
  }
  const { statusCode = 500 } = error
  res.status(statusCode).json(error)
}

module.exports = {
  middleware,
  NotFoundError,
  ForbiddenError,
}