import {forces} from 'systems/common/forces.js';
import {inputsPing} from 'systems/specific/inputsPing.js';
import {collides} from 'systems/specific/collides.js';
import {collidesBall} from 'systems/specific/collidesBall.js';
import {collidesPing} from 'systems/specific/collidesPing.js';

function update() {

    this.world.system(['forces','position'], forces);
    this.world.system(['input'], inputsPing);
    this.world.system(['hitbox','position'], collides);
    this.world.system(['hitbox','position','sphere'], collidesBall);
    this.world.system(['hitbox','position','ping'], collidesPing);

    let entitiesModif=[]
    Object.entries(this.world.entities).forEach(([name, entity]) => {
        let positionComponent=entity.get('position');
        entitiesModif.push({'name':name,'components':[positionComponent]})
    });

    if(entitiesModif.length!=0){
      this.socket.emit('updateEntities', entitiesModif);
    }
    //emit
    this.inputs.length = 0;
}

export {update};
