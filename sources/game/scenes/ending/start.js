import {World,Entity} from 'modules/world.js';
import {Button} from 'entities/button.js';
import {Title} from 'entities/title.js';

function start() {

    console.log('start ending scene');
    this.world = new World(this);
    var gameLayoutFrame=this.zones.gameLayout;
    var winner =this.state.winner;
    var title=Title.call(this,gameLayoutFrame.refSize/2,100,"Ping Pong");
    var hintText=Title.call(this,gameLayoutFrame.refSize/2,gameLayoutFrame.refSize/2-100,"Press Enter to restart");
    var winnerText=Title.call(this,gameLayoutFrame.refSize/2,gameLayoutFrame.refSize/2-200,"Player "+winner+" won");


    this.world.add([title,winnerText,hintText]);
}

export {start};
