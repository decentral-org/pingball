function destroy() {

    console.log('destroy menu scene');
    console.log('-------');

    delete this.state.redirect;
}

export {destroy};
