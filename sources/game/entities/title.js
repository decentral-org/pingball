import {Entity} from 'modules/world.js';
import {Camera} from 'components/common/camera.js';
import {Position} from 'components/common/position.js';
import {Zone} from 'components/common/zone.js';
import {Hitbox} from 'components/common/hitbox.js';
import {Text} from 'components/specific/text.js';
import {Border} from 'components/specific/border.js';

function Title(x,y,text) {
const entity=new Entity(
  'title'+text, [
      new Camera(this.camera),
      new Zone(this.zones.gameLayout),
      new Position(x,y,1),
      new Text(text),
  ]);
  return entity;
}

export {Title};
