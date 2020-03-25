import {destroy} from './destroy.js';
import {start} from './../start.js';
import {setup} from './setup.js';
import {update} from './update.js';

if (typeof module.hot !== 'undefined') {

    module.hot.accept([

        './destroy.js',
        './../start.js',
        './setup.js',
        './update.js'
    ]);
}

export {destroy, setup, start, update};
