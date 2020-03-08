const resizeCalc=function (){
  var xOffset=0;
  var yOffset=0;
  var zOffset=0;
  var width=width=this.size.width;
  var height=this.size.height;
  var scale=1;
  this.camera.set(0,0);
  this.camera.size.width=this.size.width;
  this.camera.size.height=this.size.height;
  if(this.size.width>this.size.height){
    width=this.size.height;
    xOffset=Math.ceil((this.size.width-this.size.height)/2);
  }else if(this.size.width<this.size.height){

    scale=Math.round((this.size.width/this.size.height + Number.EPSILON) * 100) / 100;
    width=this.size.height;
    height=this.size.height;
    yOffset=((this.size.height-this.size.width)/scale)/2;
    xOffset=0
  }
  this.zone[0]={'x':xOffset,'y': yOffset,'z':zOffset,width:width,height:height,scale:scale};

}

export{resizeCalc};
