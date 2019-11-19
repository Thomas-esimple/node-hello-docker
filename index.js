var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.send('Hello Thomas!')
})

app.listen(443, function() {
	console.log('app listening on port 443!')
})