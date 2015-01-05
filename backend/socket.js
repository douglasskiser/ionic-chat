'use strict';

module.exports = function(io) {
	io.on('connection', function(socket) {
		socket.on('event:new:image', function(data) {
			socket.broadcast.emit('event:incoming:image', data);
		});
		socket.on('event:new:message', function(data) {
			socket.broadcast.emit('event:incoming:message', data);
		});
	});
};