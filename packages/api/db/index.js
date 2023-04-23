const { Sequelize } = require('sequelize')

module.exports = class DB {
  constructor ({
    host,
    username,
    password,
    database,
  }) {

    this.connection = new Sequelize(database, username, password, {
      host,
      dialect: 'mysql' 
    })

    this.connect()
  }

  async connect () {
    try {
      await this.connection.authenticate()
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }

  }
}