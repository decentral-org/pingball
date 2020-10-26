import {forces} from 'systems/common/forces.js';
import {collides} from 'systems/specific/collides.js';
import {collidesBall} from 'systems/specific/collidesBall.js';
import {collidesPing} from 'systems/specific/collidesPing.js';
import {emitInputs} from 'client/socketUtils';
import {Forces} from 'components/common/forces.js';

function update() {

    // console.log('update demo scene');

    if(this.inputs.length!=0){
      emitInputs(this.inputs);
    }

    this.world.system(['forces','position'], forces);
    this.world.system(['hitbox','position'], collides);
    this.world.system(['hitbox','position','sphere'], collidesBall);
    this.world.system(['hitbox','position','ping'], collidesPing);

    this.inputs.length = 0;
    if(this.entitiesBuffer.length>0){
      if(this.deltaBuffer<this.oldDeltaBuffer){
        debugger;
      }
      console.log(this.sumDelta);
      this.delta;
      this.entitiesBuffer.forEach((entity) => {
        let worldEntity=this.world.get(entity.name)
        worldEntity.get('position').x=entity.components[0].x;
        worldEntity.get('position').y=entity.components[0].y;
        if(entity.components[1]){
          var forcesComponent=worldEntity.get('forces');
          if(forcesComponent){
            forcesComponent.parts[0].x=entity.components[1].parts[0].x;
            forcesComponent.parts[0].y=entity.components[1].parts[0].y;
          }else{
            worldEntity.add([new Forces(entity.components[1].parts)]);
          }
        }
      });
    }

    this.entitiesBuffer=[]
    this.oldDeltaBuffer=this.deltaBuffer;
}

export {update};
