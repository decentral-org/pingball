function setup() {

    console.log("setup demo scene")
    this.zones={gameLayout:{}};
    this.zones.gameLayout.refSize=1024;
    this.player1={inputs: []};
    this.player2={inputs: []};

    this.room.sockets.forEach((socket, i) => {
      socket.on('inputs', (inputs)=>{
          if(i==0){
            this.player1.inputs.push(...inputs);
          }else if(i==1){
            this.player2.inputs.push(...inputs);
          }
      });
    });

}

export {setup};
