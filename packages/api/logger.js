const middleware = (error, req, res, next) => {
  console.error(error)
  next(error)
}

module.exports = {
  middleware
}