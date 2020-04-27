function destroy() {

    console.log('destroy demoWaitingScreen scene');
    console.log('-------');

    delete this.state.redirect;
    delete this.gameReady;
}

export {destroy};
