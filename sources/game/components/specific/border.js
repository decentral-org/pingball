function Border(width, height,radius,color) {

    this.name = 'border';
    this.radius= radius;
    this.color = color;
    this.padding={width: width,height:height};
}

export {Border};
