var express = require('express');
var favicon = require('static-favicon');

var app = express();

app.use(express.static(__dirname + '/client'));

var port = process.env.PORT || 8000;
app.listen(port);
