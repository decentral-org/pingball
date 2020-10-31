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
const app=express();
const httpServer=http.createServer(app);
const io=socket.listen(httpServer);
let nbRoom=0;
const availableRoom=[];
const allRooms={};

/*app.get('/', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});*/

app.get('/alive', function(req, res){
  console.log('/ alive');
  res.send('Alive!')
});

const createRoom=function(){
  nbRoom++;
  var room=nbRoom.toString();
  availableRoom.push(nbRoom);
  allRooms[nbRoom]={io:io,room:nbRoom,sockets:[]};
  return nbRoom;
}


io.sockets.on('connection', function (socket) {
  console.log("new connection",socket.id);
  var room='';
  if(availableRoom.length>0){
    room=availableRoom.pop();
    // console.log("joinRoom:"+room);
  }else{
    room=createRoom();
    // console.log("createRoom:"+room);
  }

  socket.join(room, () => {
    // let rooms = Object.keys(socket.rooms);
    // console.log(rooms); // [ <socket.id>, 'room 237' ]
    console.log(room); // [ <socket.id>, 'room 237' ]

    socket.emit("playerSelected",allRooms[room].sockets.length+1);
    allRooms[room].sockets.push(socket);
    io.to(room).emit('new user in room',socket.id); // broadcast to everyone in the room
    io.to(room).emit('gameReady'); // broadcast to everyone in the room

    socket.on('disconnect', (reason) => {
      allRooms[room].sockets.filter(userSocket=>{
        return userSocket.id!=socket.id
      });
      if(allRooms[room].sockets.length==0){
        delete allRooms[room];
      }
    });


    if(allRooms[room].sockets.length==2){
      new TheatreServer({
          'assets': assets,
          'container': {offsetHeight:0,offsetWidth:0},
          'expose': false,
          'scenes': scenes,
          'sharp': false,
          'room':allRooms[room]
      });

       io.to(room).emit("startGameSession");
    }
  });
});

exports.start = function startServer(port){
  httpServer.listen(port, function(){
    console.log('listening on *:'+port);
  });
}

exports.stop = function stopServer(callback){
  console.log("stop");
  httpServer.close(function(){
    callback();
  });
}
