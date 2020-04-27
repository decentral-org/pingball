import {Camera} from 'modules/camera.js'
import {Keyboard} from 'modules/keyboard.js';
import {UP,DOWN,Z,S} from 'modules/keycodes.js';
import {resizeCalc} from 'client/resizeCalc.js';
import {listenUpdateEntities,onEndGameSesion} from 'client/socketUtils.js';

function setup() {

    console.log('setup demo scene');
    this.camera = new Camera(this.context, this.size.width, this.size.height);

    this.zones={gameLayout:{}};

    resizeCalc.call(this);

    this.inputs = [];
    this.entitiesBuffer=[];

    this.keyboard = new Keyboard([UP,DOWN], this.inputs);

    listenUpdateEntities((entitiesBuffer)=>{
      this.entitiesBuffer=entitiesBuffer;
    })

    onEndGameSesion((winner)=>{
      this.state.winner=winner;
      this.load('ending');
    })

}

export {setup};
