// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

// Read comments from file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route: GET /comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Route: POST /comments
app.post('/comments', function(req, res) {
  var newComment = {
    id: Date.now()}
    });
