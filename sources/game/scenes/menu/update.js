import {inputsButton} from 'systems/specific/inputsButton.js';

function update() {

    // console.log('update loading scene');
    //this.load('demoWaitingScreen');

    this.world.system(['input'], inputsButton);

    this.inputs.length = 0;
}

export {update};
