import {forces} from 'systems/common/forces.js';
import {inputsPing} from 'systems/specific/inputsPing.js';
import {collides} from 'systems/specific/collides.js';
import {collidesBall} from 'systems/specific/collidesBall.js';
import {collidesPing} from 'systems/specific/collidesPing.js';

function update() {

    // console.log('update demo scene');

    this.world.system(['input'], inputsPing);

    this.inputs.length = 0;
}

export {update};
