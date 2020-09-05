var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

require('dotenv').config()

var config = {
  server: process.env.DB_HOST,
  authentication: {
    type: 'default',
    options: {
      userName: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    }
  },
  options: {
    database: process.env.DB_NAME,
    encrypt: false
  }
}
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected !!!');
  }
});