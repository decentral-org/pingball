import io from 'socket.io-client';

let socketClient={};

const connectToGame=function(handler){
  socketClient = io.connect('http://localhost:3000');
  window.socket = socketClient;
};

const listenUpdateEntities=function(handler){
  socketClient.on('updateEntities', function (data) {
    handler(data);
  });
}

const onEndGameSesion=function(handler){
  socketClient.on('endGameSesion', function (data) {
    console.log("engGameSession");
    socketClient.close();
    handler(data);
  });
};
const emitStartGameSession=function(){
  socketClient.emit('startGameSession');
  console.log("startGameSession");
};

const emitInputs=function(inputs){
  socketClient.emit('inputs',inputs);
  console.log("emit Inputs",inputs);
}

const emit=function(element){
  socketClient.emit('emit',element);
}

export {connectToGame,emitStartGameSession,listenUpdateEntities,emitInputs,emit,onEndGameSesion};
