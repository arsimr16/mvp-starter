var express = require('express');
var bodyParser = require('body-parser');
var topics = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.get('/convstarts', function (req, res) {
  topics.selectRandom(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
    	console.log('successful GET request to "/convstarts"')
      res.json(data);
    }
  });
}); 

app.listen(3000, function() {
  console.log('listening on port 3000!');
});