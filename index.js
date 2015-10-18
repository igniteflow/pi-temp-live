var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var Redis = require('ioredis');
var redis = new Redis();

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  setInterval(function() {
    redis.get('temperature', function (err, result) {
      console.log(result);
      io.emit('temperature', result);
    });
  }, 1000);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
