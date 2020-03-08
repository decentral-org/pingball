import {Forces} from 'components/common/forces.js';
import {collideDistance} from 'systems/utils/collideDistance.js';
import {collide} from 'modules/collide.js';
import {Rectangle} from 'modules/shape.js';

function collides(entities) {
    Object.entries(entities).forEach(([name, entity]) => {

    if(name==='ball'){

      var positionComponent = entity.get('position');
      var hitboxComponent =entity.get('hitbox');
      var forcesComponent =entity.get('forces');
      var rectangle=new Rectangle(positionComponent.x,positionComponent.y,hitboxComponent.width,hitboxComponent.height);

      Object.entries(entities).forEach(([otherEntityName, otherEntity]) => {
        if(otherEntity.name!=name){

          var otherRectangle=new Rectangle(otherEntity.get('position').x,otherEntity.get('position').y,otherEntity.get('hitbox').width,otherEntity.get('hitbox').height);

          if(collide(rectangle,otherRectangle)){
            var collideDist=collideDistance(rectangle,otherRectangle);

            var xForces=collideDist.x>0?5:-5;
            var otherEntityForces=otherEntity.get('forces');
            var yForces=collideDist.y+forcesComponent.parts[0].y;
            if(otherEntityForces && otherEntityForces.parts.length>0 ){
              yForces+= otherEntityForces.parts[0].y;
            }

            entity.add([new Forces([{x:xForces,y:yForces,duration:30}])])
          }
        }
      })

    }
  });
}

export {collides};
