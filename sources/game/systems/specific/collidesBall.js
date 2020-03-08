import {Forces} from 'components/common/forces.js';

function collidesBall(entities) {
    Object.entries(entities).forEach(([name, entity]) => {

    var positionComponent = entity.get('position');
    var hitboxComponent =entity.get('hitbox');
    var forcesComponent =entity.get('forces');
    var zoneComponent =entity.get('zone');

    if(positionComponent.x<0){
      this.restart();
    }else if(positionComponent.x+hitboxComponent.width>this.zone[0].refSize){
      this.restart();
    }

    if(positionComponent.y<0 || positionComponent.y+hitboxComponent.height>this.zone[0].refSize){
      entity.add([new Forces([{x:forcesComponent.parts[0].x,y:-forcesComponent.parts[0].y,duration:forcesComponent.parts[0].duration}])])
    }
  });
}

export {collidesBall};
