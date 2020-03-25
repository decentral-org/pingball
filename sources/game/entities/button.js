import {Entity} from 'modules/world.js';
import {Camera} from 'components/common/camera.js';
import {Position} from 'components/common/position.js';
import {Zone} from 'components/common/zone.js';
import {Text} from 'components/specific/text.js';
import {Border} from 'components/specific/Border.js';
import {Selected} from 'components/specific/Selected.js';
import {Input} from 'components/specific/input.js';


function Button(x,y,width,height,text) {
const entity=new Entity(
  'button'+text, [
      new Camera(this.camera),
      new Zone(this.zones.gameLayout),
      new Position(x,y,1),
      new Border(width,height),
      new Text(text),
      new Input(['KEY_UP','KEY_DOWN'])
  ]);
  return entity;
}

export {Button};
