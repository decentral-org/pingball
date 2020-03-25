function destroy() {

    console.log('destroy ending scene');
    console.log('-------');

    delete this.state.redirect;
}

export {destroy};
