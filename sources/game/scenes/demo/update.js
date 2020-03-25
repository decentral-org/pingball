import {forces} from 'systems/common/forces.js';
import {collides} from 'systems/specific/collides.js';
import {collidesBall} from 'systems/specific/collidesBall.js';
import {collidesPing} from 'systems/specific/collidesPing.js';
import {emitInputs} from 'client/socketUtils';

function update() {

    // console.log('update demo scene');

    if(this.inputs.length!=0){
      emitInputs(this.inputs);
    }

    this.inputs.length = 0;
    if(this.entitiesBuffer.length>0){
      this.entitiesBuffer.forEach((entity) => {
        let worldEntity=this.world.get(entity.name)
        worldEntity.get('position').x=entity.components[0].x;
        worldEntity.get('position').y=entity.components[0].y;
      });
    }

    this.entitiesBuffer=[]
}

export {update};
