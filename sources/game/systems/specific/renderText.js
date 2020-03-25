function renderText(entities) {

  Object.entries(entities).forEach(([name, entity]) => {
     const textComponent = entity.get('text');
     const textString=textComponent.text;
     const positionComponent = entity.get ('position');
     const zoneComponent = entity.get('zone');
     const textFontSize=25*zoneComponent.frame.scale;

     this.context.lineWidth = 2;
     this.context.font="bold "+textFontSize+"px Arial";
     this.context.fillStyle="white";
     this.context.textBaseline = 'top';
     this.context.textAlign = "left";
     const textMeasure=this.context.measureText(textString);

     const textWidth = textMeasure.width;
     const textHeight = -textMeasure.actualBoundingBoxDescent;

     this.context.fillText(textComponent.text,(positionComponent.x*zoneComponent.frame.scale)-(textWidth/2)+zoneComponent.frame.x,(positionComponent.y*zoneComponent.frame.scale)+(textHeight/2)+zoneComponent.frame.y);
    /* this.context.beginPath();
     this.context.strokeStyle = "red";
     this.context.rect((positionComponent.x*zoneComponent.frame.scale)-(textWidth/2)+zoneComponent.frame.x,(positionComponent.y*zoneComponent.frame.scale)-(textHeight/2)+zoneComponent.frame.y, textWidth, textHeight);
     this.context.stroke();*/
   });
}

export {renderText};
