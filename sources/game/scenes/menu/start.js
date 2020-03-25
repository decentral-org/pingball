import {World,Entity} from 'modules/world.js';
import {Button} from 'entities/button.js';
import {Title} from 'entities/title.js';

function start() {

    console.log('start menu scene');
    this.world = new World(this);
    var gameLayoutFrame=this.zones.gameLayout;
    var title=Title.call(this,gameLayoutFrame.refSize/2,100,"Ping Pong");
    var hintText=Title.call(this,gameLayoutFrame.refSize/2,gameLayoutFrame.refSize/2-200,"Select a mode");
    var buttonOffline=Button.call(this,gameLayoutFrame.refSize/2,gameLayoutFrame.refSize/2,20,20,"Offline");
    var buttonOnline=Button.call(this,gameLayoutFrame.refSize/2,gameLayoutFrame.refSize/2-100,20,20,"Online");


    this.world.add([buttonOffline,buttonOnline,title,hintText]);
}

export {start};
