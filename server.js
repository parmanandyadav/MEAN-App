var express = require('express'),
app = express(),
bodyparser = require('body-parser'),
mongoose = require('mongoose'),
serverController = require('./server/controller/serverController');
var port = '3000';

mongoose.connect('mongodb://localhost:27017/mean-app');

app.get('/',function(req, res){
    res.sendFile(__dirname + '/client/view/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use(bodyparser());

//REST API
app.get('/api/claims', serverController.fetch);
app.post('/api/claims', serverController.create);

app.listen(port, function(){
	console.log('The server is running on :', port);
});