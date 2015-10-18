var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Redis = require('ioredis');
var moment = require('moment');

var redis = new Redis();

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  setInterval(function() {
    redis.get('temperature', function (err, data) {
      var parsedData = JSON.parse(data);
      var tempTime = moment(parsedData[0]).valueOf(),
          tempC = parsedData[1];
      io.emit('temperature', [tempTime, tempC]);
    });
  }, 1000);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
