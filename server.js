var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var config = require('./config');

global.appRoot = path.resolve(__dirname);
global.saltRounds = process.env.saltRounds;


homeController = require('./controllers/homeController');
adminController = require('./controllers/adminController');
feeController = require('./controllers/feeController');

var port = process.env.PORT | 8000;

mongoose.connect(config.getDbConnectionString());
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
app.use(express.static('public'));

// verify admin email 
adminController(app);
feeController(app);
// for unhandeled  url
homeController(app);

app.listen(port, function() {
    console.log("Listening on Port "+port);
    });