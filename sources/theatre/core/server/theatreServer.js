import {Canvas} from 'core/canvas.js';
import {Loop} from 'core/loop.js';
import {fakePreload} from 'core/server/fakePreload.js';

function TheatreServer(config) {

    const {assets, container, scenes,room} = config;

    const expose = config.expose || false;
    const framerate = config.framerate || 60;
    const sharp = config.sharp || false;
    const speed = config.speed || 1;

    const size = {
        'height' : container.offsetHeight,
        'width' : container.offsetWidth
    };

    let loading = null;
    let restarting = false;

    function initialize() {

        this.assets = {};
        this.delta = {};
        this.delta.render = 0;
        this.delta.update = 0;

        this.scene = this.scenes.loading;
        this.scene.setup.call(this);
        this.scene.start.call(this);

        const loop = new Loop(framerate, speed);

        loop.update((timeframe) => {

            this.delta.update = timeframe;
            this.scene.update.call(this);

            if (restarting === true) {

                this.scene.start.call(this);

                restarting = false;

                return;
            }

            if (loading !== null) {

                this.scene.destroy.call(this);
                this.scene = this.scenes[loading];
                this.scene.setup.call(this);
                this.scene.start.call(this);

                loading = null;

                return;
            }
        });

        fakePreload(assets, (assets) => {

            assets.forEach((asset) => {

                if (typeof this.assets[asset.type + 's'] === 'undefined') {

                    this.assets[asset.type + 's'] = {};
                }

                if (typeof this.assets[asset.type + 's'][asset.scope] === 'undefined') {

                    this.assets[asset.type + 's'][asset.scope] = {};
                }

                this.assets[asset.type + 's'][asset.scope][asset.name] = asset.getter;
            });

            this.preloading = false;
        });

        this.loop = loop;
        this.preloading = true;
    }

    function load(scene) {

        loading = scene;
    }

    function restart() {

        restarting = true;
    }

    this.preloading = false;
    this.scenes = scenes;
    this.size = size;
    this.room=room;
    this.state = {};
    this.version = '0.33.0';

    this.load = load;
    this.restart = restart;

    initialize.call(this, config);

    if (expose === true) {

        window.theatre = this;
    }
}

// exports current module as an object
export {TheatreServer};
