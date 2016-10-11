var express = require('express');
var app = express();

app.use(express.static(__dirname + "/"));

app.get('/contactlist', function(req, res) {
	console.log("I received a GET request 2")

	person1 = {
		name: 'Tom',
		email: 'tom@email1.com',
		number: '(111) 111-1111'
	};

	var contactlist = [person1];
	res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000");