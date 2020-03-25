function destroy() {

    console.log('destroy demo scene');
    console.log('-------');

    this.socket.emit('endGameSesion',this.state.winner);
}

export {destroy};
