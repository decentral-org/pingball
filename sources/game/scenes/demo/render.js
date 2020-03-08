import {images} from 'systems/common/images.js';

function render() {

    // console.log('render demo scene');

    this.context.fillStyle = '#d7dae0';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.context.fillStyle = '#000000';
    this.context.fillRect(this.zone[0].x ,this.zone[0].y, this.zone[0].width, this.zone[0].height);

    this.world.system(['images','position'], images);
    this.camera.render();
}

export {render};
