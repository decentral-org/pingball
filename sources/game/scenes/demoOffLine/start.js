import {World} from 'modules/world.js';
import {Player} from 'entities/player.js';
import {Ball} from 'entities/ball.js';

function start() {

    console.log('start demo scene');
    this.world = new World(this);
    var command1=['KEY_Z','KEY_S'];
    var command2=['KEY_UP','KEY_DOWN'];
    var gameLayoutFrame=this.zones.gameLayout;
    var player1=Player.call(this,1,command1,16,gameLayoutFrame.refSize/2-48);
    var player2=Player.call(this,2,command2,gameLayoutFrame.refSize-48,gameLayoutFrame.refSize/2-48);
    var ball=Ball.call(this,gameLayoutFrame.refSize/2,gameLayoutFrame.refSize/2-16);
    this.world.add(ball);
    this.world.add(player1);
    this.world.add(player2);
}

export {start};
