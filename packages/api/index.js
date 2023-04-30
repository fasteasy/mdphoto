require('dotenv').config()
const express = require('express')
const blog = require('./components/blog/router')
const auth = require('./components/auth/router')
const app = express()
const bodyParser = require('body-parser')
const errorHandler = require('./error').middleware
const loggerHandler = require('./logger').middleware

async function init () {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use('/blog', blog)
  app.use('/auth', auth)
  app.use(loggerHandler)
  app.use(errorHandler)
  app.listen(3000)
}

init()