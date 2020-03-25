import {Entity} from 'modules/world.js';
import {Camera} from 'components/common/camera.js';
import {Position} from 'components/common/position.js';
import {Images} from 'components/common/images.js';
import {Hitbox} from 'components/common/hitbox.js';
import {Zone} from 'components/common/zone.js';
import {Input} from 'components/specific/input.js';
import {Ping} from 'components/specific/ping.js';

function Player(number,command,x,y) {

const entity=new Entity(
  'player'+number, [
      new Camera(this.camera),
      new Zone(this.zones.gameLayout),
      new Position(x,y,1),
      new Ping(),
      new Hitbox(32,96),
      new Images([{
          'source':  this.assets.images.common.player(),
          'frames': [
              [0, 0, 32, 96]
          ],
          'frame': 0,
          'destination': [0, 0, 0, 32, 96]
      }]),
  ]);

  if(command && command.length>0){
      entity.add(new Input(command));
  }

  return entity;
}

export {Player};
