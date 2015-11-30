var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json()); // for parsing application/json

var database = [];

app.get('/', function (req, res) {
  res.send({'server':'up'});
});

app.get('/sessions', function (req, res) {
  res.send(database);
});

app.post('/sessions', function (req, res) {
  database.push(req.body);
  res.send(database);
});

app.put('/sessions/:id', function (req, res) {
  //update
  res.send(database);
});

app.delete('/sessions/:id', function (req, res) {
  database = database.filter(function (el) { return el.id != req.params.id; }); 
  res.send(database);
});

var server = app.listen(3000, function () {
  console.log('Example app listening at http://localhost:3000');
});

