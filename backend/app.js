'use strict';

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

require('./socket')(io);

server.listen(3000, function() {
	console.log('Server is running');
});