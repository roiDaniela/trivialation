var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const SERVER_PORT = 8000;

  

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/**
 * Connect to port 8080.
 */
app.listen(process.env.PORT || SERVER_PORT, () => {
    console.log("Server started on port " + SERVER_PORT);
});


mongoose.connect('mongodb://localhost/trivialationDB', function() {
    console.log("DB connection established!!!");
 });


var Player = require('./models/playerModel');
var Game = require('./models/gameModel.js');


app.get('/signup', function(request, response) {
    var username = request.query.username;
    var password = request.query.password;

    // TODO: save username to players db
});

