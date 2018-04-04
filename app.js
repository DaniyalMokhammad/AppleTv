
var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 3000

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function (socket) {
//     console.log(socket.id);
//     socket.on('start', () => {
//             console.log('update');
//             io.emit('start');
          
//       });
//     socket.on('stop', () => {
//         io.emit('stop');
//     })
// });

// app.listen(port, function() {
//     console.log('Our app is running on http://localhost:' + port);
// });
app.get("/", function(req, res){
    res.send("welcome to NodeJS");
})
app.listen(port);