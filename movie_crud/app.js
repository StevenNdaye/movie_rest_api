var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var movies = require('./routes/movies'); //routes are define here
var app = express();//Create the Express app

var dbName = 'movieDB';
var connectingString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectingString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', movies);

module.exports = app;


