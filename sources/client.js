import {assets} from 'assets/index.js';
import * as scenes from 'scenes/index.js';

import {Theatre} from 'core/theatre.js';

//window.serverUrl="https://pingpong-experiment.herokuapp.com/";
window.serverUrl = "";

new Theatre({
    'assets': assets,
    'container': document.body,
    'expose': true,
    'scenes': scenes,
    'sharp': true
});
