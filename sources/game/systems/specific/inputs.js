import {Forces} from 'components/common/forces.js';

function inputs(entities) {
    Object.entries(entities).forEach(([name, entity]) => {

      this.inputs.forEach((input) => {

        const inputComponent = entity.get('input');
        var index= inputComponent.inputs.indexOf(input.action);
        
        if (index !== -1 && input.state === 'DOWN') {

          switch (index) {
              case 0:
                entity.add([new Forces([{x:0,y:-5,duration:10}])])

              break;
              case 1:
                entity.add([new Forces([{x:0,y:5,duration:10}])])

              break;
          }
        }
        else if (index !== -1
        && input.state === 'UP') {

          switch (index) {
              case 0:
                entity.remove('forces')
              break;
              case 1:
                entity.remove('forces')
              break;

          }
        }

    });

  });
}

export {inputs};
