

var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = 3000
var emitters = [];
server.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
    
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {

    console.log(socket.id);

    socket.on('broadcast', function(emitName){
        socket.broadcast.emit(emitName);
    });
    socket.on('sayStart', function(){
            socket.broadcast.emit('sayStart');
    })

    socket.on('connectedTV', function(){
        console.log('Connected TV :  ' + socket.id);
        var id = socket.id;
        socket.broadcast.emit('connectedTV', id);
    })

    socket.on('sendingExersises', function(object){
        console.log("Object:"  + JSON.stringify(object));

        io.to(object.id).emit('recivingExercises', object.exercises);
    })


});


