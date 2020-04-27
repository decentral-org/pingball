function destroy() {

    console.log('destroy demo scene');
    console.log('-------');

    this.room.io.to(this.room.room).emit('endGameSesion',this.state.winner);
}

export {destroy};
