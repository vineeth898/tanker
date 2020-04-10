class Tanker {
  constructor(x, y,angle) {
      var options = {
      isStatic: true
     }
     this.body=Bodies.rectangle(x,y,100,10,options);
    Matter.Body.setAngle(this.body,angle);
     this.width=80;
     this.height=20;
    World.add(world,this.body);
    };

    display(){
      const position=this.body.position;
      push();
      translate(position.x,position.y);
      rotate(this.body.angle);
      fill(100);
      rect(0,0,this.width,this.height);
      pop();
      fill(107,142,35);
      rectMode(CENTER);
      rect(position.x-30,position.y+40,200,10);
      rect(position.x-40,position.y+10,90,50);
      console.log(position.x-50,position.y);
    };
}
