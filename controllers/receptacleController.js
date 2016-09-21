var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var db = require("../models");

// GET /api/receptacles
function index(req, res) {
  db.Receptacle.find(function(err, receptacles){
    if (err) { 
    	return console.log("index error: " + err); 
    }
    res.json(receptacles);
  });
}

//GET /api/receptacles/gps
function gps(req, res) {
  db.Receptacle.find(function(err, receptacles) {
    if (err) {
      return console.log('error with gps controller: ' + err);
    }
    var responseList = [];
    receptacles.forEach(function(element, index, array) {
      var subArray = [];
      subArray.push(element.lat);
      subArray.push(element.lon);
      subArray.push(element.address);
      responseList.push(subArray);
    })
    res.send(responseList);
  })
}
// POST /api/receptacles
function create(req, res) {
	newBin = new db.Receptacle(req.body);
	newBin.save();
	res.json(newBin);
}

// UPDATE /api/receptacles/:binId
function update(req, res) {
  binId = req.params.id;
  db.Receptacle.findById(req.params.binId, function(err, foundReceptacle) {
    if(err) { 
      console.log('receptaclesController.update error', err); 
    }
    console.log('found receptacle: ' + foundReceptacle);
    foundReceptacle.type = req.body.type;
    foundReceptacle.save(function(err, savedReceptacle) {
      if(err) { 
        console.log('updating receptacle failed');
      }
      res.json(savedReceptacle);
    });
  });
}
// DELETE /api/receptacles/:binId
function destroy(req, res) {
  db.Receptacle.findOneAndRemove({ _id: req.params.binId }, function(err, foundReceptacle){
    res.json(foundReceptacle);
  });
}



//export functions to server.js
module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  update: update,
  gps: gps
}