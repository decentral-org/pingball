function destroy() {

    console.log('destroy demoWaitingScreen scene');
    console.log('-------');

    delete this.state.redirect;
}

export {destroy};
