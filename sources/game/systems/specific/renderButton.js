function renderButton(entities) {

  Object.entries(entities).forEach(([name, entity]) => {
     const textComponent = entity.get('text');
     const positionComponent = entity.get ('position');
     const zoneComponent = entity.get('zone');
     const borderComponent = entity.get('border');
     const isSelected= entity.get('selected');
     const textString=textComponent.text;
     const borderPaddingWidth=borderComponent.padding.width;
     const borderPaddingHeight=borderComponent.padding.height;
     const textFontSize=25*zoneComponent.frame.scale;

    this.context.font="bold "+textFontSize+"px Arial";
    this.context.fillStyle="white";
    this.context.textBaseline = 'top';
    this.context.textAlign = "left";
    this.context.strokeStyle = "white";
     if(isSelected){
       this.context.lineWidth = 1;
       this.context.fillStyle="white";
       this.context.strokeStyle = "black";
     }

     const textMeasure=this.context.measureText(textString);
     const textWidth = textMeasure.width;
     const textHeight = -textMeasure.actualBoundingBoxDescent;
     const borderPaddingWidthScaled=(borderPaddingWidth*zoneComponent.frame.scale);
     const borderPaddingHeightScaled=-(borderPaddingHeight*zoneComponent.frame.scale);

    this.context.beginPath();
    this.context.rect((positionComponent.x*zoneComponent.frame.scale)-(textWidth/2)-borderPaddingWidthScaled+zoneComponent.frame.x,(positionComponent.y*zoneComponent.frame.scale)-(textHeight/2)-borderPaddingHeightScaled+zoneComponent.frame.y, textWidth+(borderPaddingWidthScaled*2), textHeight+(borderPaddingHeightScaled*2));
    if(isSelected){
      this.context.fill();
      this.context.fillStyle="black";
    }else{
      this.context.stroke();
    }

    this.context.fillText(textComponent.text,(positionComponent.x*zoneComponent.frame.scale)-(textWidth/2)+zoneComponent.frame.x,(positionComponent.y*zoneComponent.frame.scale)+(textHeight/2)+zoneComponent.frame.y);

   });
}

export {renderButton};
