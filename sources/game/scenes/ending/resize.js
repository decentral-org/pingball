import {resizeCalc} from 'client/resizeCalc.js';

function resize() {

    console.log('resize ending scene');


    resizeCalc.call(this);
}

export {resize};
