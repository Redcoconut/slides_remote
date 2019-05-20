var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/phone', function(req, res){
  res.sendFile(__dirname + '/phone.html');
});
app.get('/compjav.js', function(req, res){
  res.sendFile(__dirname + '/compjav.js');
});
app.get('/phonejav.js', function(req, res){
  res.sendFile(__dirname + '/phonejav.js');
});
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//
// io.on('connection', function(socket){
//   console.log("TESING")
//   socket.on('chat message', function(msg){
//     console.log(msg)
//     io.emit('chat message', msg);
//   });
// });


io.on('connection', function(socket){
  console.log("TESTING")
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(80, function(){
  console.log('listening on *:80');
});
