require('dotenv').config({ path: '../.env' })

const host = process.env.DB_HOST
const database = process.env.DB_NAME
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD
const dialect = 'mysql'

const defaultConfig = {
  username,
  password,
  database,
  host,
  dialect
}

module.exports = {
  "development": defaultConfig,
  "test": defaultConfig,
  "production": defaultConfig
}
