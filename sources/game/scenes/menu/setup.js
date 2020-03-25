import {Camera} from 'modules/camera.js'
import {Keyboard} from 'modules/keyboard.js';
import {UP,DOWN,SPACE,ENTER} from 'modules/keycodes.js';
import {resizeCalc} from 'client/resizeCalc.js';

function setup() {

    console.log('setup menu scene');

    this.camera = new Camera(this.context, this.size.width, this.size.height);

    this.zones={gameLayout:{}};

    resizeCalc.call(this);

    this.inputs = [];

    this.keyboard = new Keyboard([UP,DOWN,SPACE,ENTER], this.inputs);
}

export {setup};
