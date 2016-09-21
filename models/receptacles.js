var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//define Comment Schema to go inside of Receptacle Schema
var Comments = new Schema({
    commenterName: String,
    commentContent: String
});

//Receptacle Schema has comment schema embedded within
var ReceptacleSchema = new Schema({
	address: String,
	imageUrl: String,
	cityName: String,
	type: String,
	lat: Number,
	lon: Number,
	comments: [Comments]
})

//send this stuff out
var Receptacle = mongoose.model('Receptacle', ReceptacleSchema);
module.exports = Receptacle;