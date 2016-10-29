var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://postgres:testmini@localhost/sandbox";

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());

var massiveInstance = massive.connectSync({connectionString : connectionString});

app.set('db', massiveInstance);

// var db = app.get('db');

// db.new_plane(function(err, planes){
//     console.log(err, "plane added");
// });

// db.get_planes(function(err, planes){
//     console.log(err, planes);
// });

var controller = require('./controller.js');

controller.getPlanes();

app.listen('3000', function(){
  console.log("Successfully listening on : 3000");
});
