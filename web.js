var express = require('express');

var app = express.createServer(express.logger());

var fs =require('fs');
var data=new Buffer(256);
var err;

app.get('/', function(request, response) {
data=fs.readFileSync("index.html");


response.send(data.toString());
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
