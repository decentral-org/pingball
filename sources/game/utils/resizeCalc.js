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
  this.zone[0]={'x':xOffset,'y': yOffset,'z':zOffset,width:width,height:height,scale:scale,refSize:1024};

}

export{resizeCalc};
