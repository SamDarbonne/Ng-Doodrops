var db = require("./models");

////////////////
//    DATA    //
////////////////

//hard coded seed data goes here
receptaclesList = [
					{
						address: '225 Bush St.',
						cityName: 'San Francisco',
						type: 'Not a poo receptacle',
						imageUrl: 'http://kcelestine.github.io/img/portfolio/ga.jpg',
						lat: 37.790841,
						lon: -122.40128019999997,

						comments: [
							{commenterName: 'sam', commentContent: 'good programs programmed here'},
							{commenterName: 'john', commentContent: 'my name is john'},
							{commenterName: 'sam', commentContent: 'I like to leave my doo at this drop'}
						]

					},
					{
						address: '16 Cranfield',
						cityName: 'San Carlos',
						type: 'My house, covered in poo',
						lat: 37.7620251,
						lon: -122.42141379999998,
						comments: [
							{commenterName: 'Julian', commentContent: 'Yo this spot is a dope spot to drop your doo'}
						]
					},
					{
						address: '1776 Constitution Way',
						cityName: 'Washington D.C.',
						type: 'Doggy Station',
						lat: 37.7522655,
						lon: -122.4209411
					},
					{
						address: '333 Mission St.',
						cityName: 'San Francisco',
						type: 'Dumpster',
						lat: 37.7419361,
						lon: -122.4225657,
						comments: [
							{commenterName: 'George', commentContent: 'This is my favorite dumpster to dump my doo in'}
						]
					},
					{
						address: '1600 Divisadero',
						cityName: 'San Francisco',
						type: 'Public Garbage Can',
						lat: 37.7861524,
						lon: -122.44803709999996,
						comments: [
							{commenterName: 'Ser Wyman Manderly', commentContent: 'Great place to grab a pie and drop your doo at the same time!'}
						]
					},
					{
					    lat: 37.7602952,
					    lon: -122.50808710000001,
					    type: "Garbage Can",
					    address: "48th Ave",
					    cityName: " San Francisco",
					    comments: [
					    	{
					    		commenterName: 'Jango Fett',
					    		comentContent: 'Needs more clones'
					    	},
					    	{
					    		commenterName: 'Arnold Schwarzenegger',
					    		commentContent: 'TOO MANY CLONES'
					    	}
					    ]
					}
				 ]


////////////////
//   SAVING   //
////////////////

function pushToDatabase() {
	//code goes here
}



db.Receptacle.remove({}, function(err, receptacles){

  db.Receptacle.create(receptaclesList, function(err, receptacles){
    if (err) { return console.log('ERROR', err); }
    console.log("all receptacles:", receptacles);
    console.log("created", receptacles.length, "receptacles");
    process.exit();
  });

});