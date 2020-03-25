import {Camera} from 'modules/camera.js'

function setup() {

    console.log('setup loading scene');

    this.camera = new Camera(this.context, this.size.width, this.size.height);

}

export {setup};
