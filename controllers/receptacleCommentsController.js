var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var db = require("../models");



// GET
function index(req, res) {
	res.send('index of comments for receptacle');
}

// POST
function create(req, res) {
  var receptacleId = req.params.binId;
  var newComment;
  db.Receptacle.findById(req.params.binId, function(err, foundReceptacle) {
    console.log(req.body);
    foundReceptacle.comments.push(req.body);
    foundReceptacle.save(function(err, savedReceptacle) {
      console.log('newComment created: ', newComment);
      res.json('comment created');
    });
  });
}



// DELETE
function destroy(req, res) {
	db.Receptacle.update({_id: req.params.binId }, {$pull: {comments: {_id: req.params.commentId}}})
	res.send('deleted?')

}















module.exports = {
  index: index,
  create: create,
  destroy: destroy
}
