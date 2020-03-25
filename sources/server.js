import 'module-alias/register';
import express from 'express';
import {assets} from 'assets/index.js';
import http from 'http';
import { Worker } from 'worker_threads'
import {TheatreServer} from 'core/server/theatreServer.js';
import {polyfillWebToServer} from 'core/server/polyfill.js';
import * as scenes from 'server/scenes/index.js';
import socket from 'socket.io';

polyfillWebToServer();
const app =express();
const httpServer=http.createServer(app);
const io=socket.listen(httpServer);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.sockets.on('connection', function (socket) {
  console.log("new connection",socket.id);

  socket.on('startGameSession', function(){

      console.log("startGameSession")
      new TheatreServer({
          'assets': assets,
          'container': {offsetHeight:0,offsetWidth:0},
          'expose': true,
          'scenes': scenes,
          'sharp': false,
          'socket':socket
      });
  });
});

exports.start = function startServer(){
  httpServer.listen(3000, function(){
    console.log('listening on *:3000');
  });
}
