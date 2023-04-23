require('dotenv').config()
const express = require('express')
const blog = require('./components/blog/router')
const app = express()
const bodyParser = require('body-parser')

async function init () {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use('/blog', blog)
  app.use((error, req, res, next) => {
    if (error) {
      res.status(500).json({ 
        error: true,
        message: error.message
      })
      res.end()
    }
    next()
  })
  app.listen(3000)
}

init()