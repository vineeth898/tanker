class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 0.9
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    World.add(world,this.body);
  }

  display() {
    ellipseMode(RADIUS);
    fill(255);
    ellipse(this.body.position.x,this.body.position.y,this.radius);
  }
}
