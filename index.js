const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const UsersService = require('./UsersService');
const userService = new UsersService();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('/index.html')
});

io.on('connection', function(socket) {
    socket.on('join', function(name) {
        //the user who appears in the application is saved on the service that holds the chat list
        userService.addUser({
            id: socket.id,
            name
        });
        /*application is emitting an 'update' event that updates information about
        list of users to each listener to event 'update'*/

        io.emit('update',{
            users: userService.getAllUsers()
        });
    });
    socket.on('disconnect', () => {
        userService.removeUser(socket.id);
        socket.broadcast.emit('update', {
            users: userService.getAllUsers()
        });
    });
    socket.on('message', function(message) {
        const {name} = userService.getUserById(socket.id);
        socket.broadcast.emit('message', {
            text: message.text,
            from: name
        });
    });
});

server.listen(3000, function() {
    console.log('listening on *:3000');
});
