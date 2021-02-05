var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var name = request.query.name;
	var description = request.query.description;

	data.friends.push({
		"name": name, 
		"description": description,
		"imageURL": "http://lorempixel.com/400/400/people"
	});

	response.render('index',data);
 }