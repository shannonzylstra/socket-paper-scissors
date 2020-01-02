const express = require('express');
const app = express();
let server = require('http').createServer(app);
let io = require('socket.io').listen(server);
const layout = require('express-ejs-layouts');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(layout);

// SOCKET VARIABLES
let connections = [];
let players = [];
// SOCKET STUFF
io.sockets.on('connection', socket => {
    connections.push(socket);
    console.log(`Connections made: ${connections.length} sockets connected`);

    socket.on('disconnect', data => {
        players.splice(players.indexOf(socket.username), 1);
        updateUsernames();
        console.log(data);
        connections.splice(connections.indexOf(socket), 1);
        io.emit('disconnected', socket.username);
        console.log(`Disconnected: ${connections.length} sockets connected.`);
    });

    const updateUsernames = () => {
        
    }
});

app.get('/', (req, res) => {
    res.render('index');
});

server.listen(3000, () => {
    console.log(`You're listening to the smooth sounds of port 3000 in the morning.`);
});