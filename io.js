// io.js

var io = require('socket.io')();

// Listen for new connections from clients (socket)
io.on('connection', function(socket) {
	//new code below
	socket.on('add-circle', function(data) {
		io.emit('add-circle', data);
	});
});

var socket = io();
console.log(socket);

// io represents socket.io on the server - let's export it
module.exports = io;
