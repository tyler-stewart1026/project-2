require("dotenv").config();

let config = {
    "development": {
      "username": "root",
      "password": process.env.DB_PASSWORD,
      "database": "skinder_db",
      "host": "127.0.0.1",
      "port": 3306,
      "dialect": "mysql",
      "operatorsAliases": false
    }
  }
  
  module.exports = config;