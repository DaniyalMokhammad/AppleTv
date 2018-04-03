var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log(socket.id);
    socket.on('start', () => {
            console.log('update');
            io.emit('start');
          
      });
    socket.on('stop', () => {
        io.emit('stop');
    })
});

app.listen(process.env.PORT || 3000);