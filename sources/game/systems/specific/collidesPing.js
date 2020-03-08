import {Forces} from 'components/common/forces.js';

function collidesPing(entities) {
    Object.entries(entities).forEach(([name, entity]) => {

    var positionComponent = entity.get('position');
    var hitboxComponent =entity.get('hitbox');
    var forcesComponent =entity.get('forces');
    var zoneComponent =entity.get('zone');

    if(positionComponent.y<0){
      positionComponent.y=0;
      entity.remove('forces');
    }else if(positionComponent.y+hitboxComponent.height>this.zone[0].refSize){
      positionComponent.y=this.zone[0].refSize-hitboxComponent.height;
      entity.remove('forces');
    }
  });
}

export {collidesPing};
