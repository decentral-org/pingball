function setup() {

    console.log("setup demo scene")
    this.zones={gameLayout:{}};
    this.zones.gameLayout.refSize=1024;
    this.inputs = [];

    this.socket.on('inputs', (inputs)=>{
        console.log(inputs);
        this.inputs.push(...inputs);
    });

}

export {setup};
