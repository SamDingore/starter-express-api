const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors'); // Import the cors middleware.

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors()); // Enable CORS for all routes.

app.get('/', (req, res) => {
  res.send('Server is running');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (data) => {
    console.log(`Message received: ${data}`);
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
