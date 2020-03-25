const resizeCalc=function (){
  var xOffset=0;
  var yOffset=0;
  var zOffset=0;
  var width=width=this.size.width;
  var height=this.size.height;
  var defaultSize=1024;
  var scale=1;
  if(this.size.width>this.size.height){
    scale=Math.round((this.size.height/defaultSize) * 100) / 100;
    width=this.size.height;
    height=this.size.height;
    xOffset=(this.size.width-this.size.height)/2;

  }else{
    scale=Math.round((this.size.width/defaultSize) * 100) / 100;
    width=this.size.width;
    height=this.size.width;
    yOffset=(this.size.height-this.size.width)/2;
  }
  this.camera.size.width=this.size.width;
  this.camera.size.height=this.size.height;
  this.zones.gameLayout.x=xOffset;
  this.zones.gameLayout.y=yOffset;
  this.zones.gameLayout.z=zOffset;
  this.zones.gameLayout.width=width;
  this.zones.gameLayout.height=height;
  this.zones.gameLayout.scale=scale;
  this.zones.gameLayout.refSize=1024;
}

export{resizeCalc};
