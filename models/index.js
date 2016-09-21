var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dogpoo");

module.exports.Receptacle = require('./receptacles.js');

