class BobObject {
    constructor(x, y,radius) {
      var options = {
          
          restitution:1,
          friction:3,
          density:4,
          isStatic:false
      }
      this.body = Bodies.circle(x,y,radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);  
      fill("Blue");
      ellipse(0,0, this.radius,45);
      pop();
    }
  }