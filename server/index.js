var express = require('express');
var app = express();
var path = require('path');
var React = require('../public/assets/app.server');

app.use(express.static(path.join(__dirname, '..', 'public')));

// for server side rendering
app.get('/', function (req, res, next) {
  React(req, res);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
