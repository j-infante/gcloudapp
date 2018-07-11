'use strict';

const config = require('../config');
var express = require('express');

var mysql = require('mysql');
var router = express.Router();
let DB = require("../models/sqlconnection")

var options ={
  user: config.get('MYSQL_USER'),
  password: config.get('MYSQL_PASSWORD'),
  database: 'mysigridbot'
}
if (config.get('INSTANCE_CONNECTION_NAME') && config.get('NODE_ENV') === 'production') {
  options.socketPath = `/cloudsql/${config.get('INSTANCE_CONNECTION_NAME')}`;
}

let connection = mysql.createConnection(options);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dialog Flow' });
});

router.post('/getDetails', function(req,res,next){
  console.log("req body",req.body);
  res.send({
    status: res.statusCode,
    message: req.body
  });
})

module.exports = router;
