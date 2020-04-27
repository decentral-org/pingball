import {World} from 'modules/world.js';
import {Player} from 'entities/player.js';
import {Title} from 'entities/title.js';
import {Ball} from 'entities/ball.js';
import {Button} from 'entities/button.js';

function start() {

    console.log('start demoWaitingSreen scene');
    this.world = new World(this);
    var command1=['KEY_Z','KEY_S'];
    var command2=['KEY_UP','KEY_DOWN'];
    var command3=['KEY_SPACE'];
    var gameLayoutFrame=this.zones.gameLayout;

    var title=Title.call(this,gameLayoutFrame.refSize/2,gameLayoutFrame.refSize/2-200,"Waiting Other Player");
    var player1=Player.call(this,1,command1,16,gameLayoutFrame.refSize/2-48);
    var player2=Player.call(this,2,command2,gameLayoutFrame.refSize-48,gameLayoutFrame.refSize/2-48);
    var ball=Ball.call(this,gameLayoutFrame.refSize/2,gameLayoutFrame.refSize/2-16);
    this.world.add(title);
    this.world.add(ball);
    this.world.add(player1);
    this.world.add(player2);
}

export {start};
