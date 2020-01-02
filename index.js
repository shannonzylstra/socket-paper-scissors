const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const layout = require('express-ejs-layouts');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(layout);

app.get('/', (req, res) => {
    res.render('index');
});

server.listen(3000, () => {
    console.log(`You're listening to the smooth sounds of port 3000 in the morning.`);
});