function destroy() {

    console.log('destroy demo scene');
    console.log('-------');

    delete this.state.redirect;
    delete this.player;
}

export {destroy};
