require("dotenv").config();
<<<<<<< HEAD
=======

>>>>>>> fc195f12e63990b85d30e5369526beb5410bb99e
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