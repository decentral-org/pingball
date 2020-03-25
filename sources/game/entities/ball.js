import {Entity} from 'modules/world.js';
import {Camera} from 'components/common/camera.js';
import {Position} from 'components/common/position.js';
import {Images} from 'components/common/images.js';
import {Hitbox} from 'components/common/hitbox.js';
import {Zone} from 'components/common/zone.js';
import {Forces} from 'components/common/forces.js';
import {Sphere} from 'components/specific/sphere.js';

function Ball(x,y) {
const entity=new Entity(
  'ball', [
      new Camera(this.camera),
      new Zone(this.zones.gameLayout),
      new Position(x,y,1),
      new Forces([{x:-5,y:0,duration:30}]),
      new Hitbox(32,32),
      new Sphere(),
      new Images([{
          'source':  this.assets.images.common.ball(),
          'frames': [
              [0, 0, 32, 32]
          ],
          'frame': 0,
          'destination': [0, 0, 0, 32, 32]
      }]),
  ]);
  return entity;
}

export {Ball};
