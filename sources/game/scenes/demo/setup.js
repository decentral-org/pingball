import {Camera} from 'modules/camera.js'
import {Keyboard} from 'modules/keyboard.js';
import {UP,DOWN,Z,S} from 'modules/keycodes.js';
import {resizeCalc} from 'utils/resizeCalc.js';

function setup() {

    console.log('setup demo scene');
    this.camera = new Camera(this.context, this.size.width, this.size.height);

    this.zone=[];

    resizeCalc.call(this);

    this.inputs = [];

    this.keyboard = new Keyboard([UP,DOWN,Z,S], this.inputs);

}

export {setup};
