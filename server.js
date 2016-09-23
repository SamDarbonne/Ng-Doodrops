////// Express and dependencies

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var db = require('./models');
app.use(bodyParser.json())

//static files
app.use(express.static(__dirname + '/public'));
app.use('/vendor', express.static(__dirname + '/bower_components'))
//gotta grab our controllers or nothing in here will work
var controllers = require('./controllers');

//////////////////
//    ROUTES    //
//////////////////

//get root route (index.html)
app.get('/', function(req, res) {
	  res.sendFile(__dirname + '/views/index.html');
})

//get list of receptacles
app.get('/api/receptacles', controllers.receptacles.index);

//post new receptacle
app.post('/api/receptacles', controllers.receptacles.create);

//get receptacle by id
app.get('/api/receptacles/:binId', controllers.receptacles.show);

//update receptacle by id
app.put('/api/receptacles/:binId', controllers.receptacles.update);

//delete receptacle
app.delete('/api/receptacles/:binId', controllers.receptacles.destroy);

//get list of receptacle locations (lat, lon)
app.get('/api/receptacles/gps', controllers.receptacles.gps);

//add comment to receptacle by receptacle id
app.post('/api/receptacles/:binId/comments', controllers.comments.create);

//delete comment by comment id
app.delete('/api/receptacles/:binId/comments/:commentId', controllers.comments.destroy);

app.get('*', function(req, res) {
	res.redirect('/');
})

///////////////
// SERVERY   //
//     JUNK  //
///////////////

//turn on the server
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});