import {Camera} from 'modules/camera.js'
import {Keyboard} from 'modules/keyboard.js';
import {SPACE,ENTER} from 'modules/keycodes.js';
import {resizeCalc} from 'client/resizeCalc.js';

function setup() {

    console.log('setup ending scene');

    this.camera = new Camera(this.context, this.size.width, this.size.height);

    this.zones={gameLayout:{}};

    resizeCalc.call(this);

    this.inputs = [];

    this.keyboard = new Keyboard([SPACE,ENTER], this.inputs);
}

export {setup};
