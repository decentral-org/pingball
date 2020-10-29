import {resizeCalc} from 'client/resizeCalc.js';

function resize() {

    console.log('resize demo scene');
    
    resizeCalc.call(this);
}

export {resize};
