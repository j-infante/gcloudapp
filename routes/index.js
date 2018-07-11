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

//console.log(connection);
//let data = {"queryText":"tests", "fulfillmentText":"tst", "fulfillmentMessages":"s", "outputContexts":"sd", "intent":"as"};
//connection.query('INSERT INTO dialog_flow SET ?',data, function (err,result){
//	if (err) throw err;
//	console.log(result);
//});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dialog Flow' });
});

router.post('/here', function(req, res, next) {
	res.send(req);
});
router.post('/getDetails', function(req,res,next){
  let queryResult = req.body.queryResult;
  
	let queryText = JSON.stringify(queryResult.queryText);
	let fulfillmentText = JSON.stringify(queryResult.fulfillmentText);
	let fulfillmentMessages = JSON.stringify(queryResult.fulfillmentMessages);
	let outputContexts = JSON.stringify(queryResult.outputContexts);
	let intent = JSON.stringify(queryResult.intent);
	 
let data = {queryText, fulfillmentText, fulfillmentMessages, outputContexts, intent};

connection.query('INSERT INTO dialog_flow SET ?',data,function(err,result){
	if(err)throw err;
	console.log(result);
	return res.json({
		status: res.statusCode,
		message: result
		});
	});
});

module.exports = router;
