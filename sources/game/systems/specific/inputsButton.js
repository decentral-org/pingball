import {Selected} from 'components/specific/Selected.js';

function inputsButton(entities) {

    const entitiesArray=Object.entries(entities);
    this.inputs.forEach((input) => {

      if (input.state === 'DOWN') {

        switch (input.action) {
            case 'KEY_UP':
              entitiesArray[1][1].add([new Selected()])
              entitiesArray[0][1].remove('selected');
              this.state.mode="online";
            break;
            case 'KEY_DOWN':
              entitiesArray[0][1].add([new Selected()])
              entitiesArray[1][1].remove('selected');
              this.state.mode="offline";
            break;
            case 'KEY_ENTER':
              if(this.state.mode=="offline"){
                this.load('demoOffline')
              }else if(this.state.mode=="online"){
                this.load('demoWaitingScreen')
              }
            break;
        }
      }
    });

}

export {inputsButton};
