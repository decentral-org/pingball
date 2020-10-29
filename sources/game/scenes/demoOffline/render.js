import {images} from 'systems/common/images.js';

function render() {

    // console.log('render demo scene');

    this.context.fillStyle = '#d7dae0';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = '#000000';
    this.context.fillRect(this.zones.gameLayout.x ,this.zones.gameLayout.y, this.zones.gameLayout.width, this.zones.gameLayout.height);

    this.world.system(['images','position'], images);
    this.camera.render();
}

export {render};
