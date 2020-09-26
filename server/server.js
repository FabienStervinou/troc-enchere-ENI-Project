//Import
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;

require('dotenv').config()

//Instantiate server 
var server = express();

//Body-parser configuration 
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//Configure routes 
server.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>Welcome on Troc Enchere server</h1>')
});

server.use('/api/', apiRouter);

//Launch server 
const PORT = 3000
server.listen(PORT, function () {
  console.log(`Server listen on ${PORT}`)
})
