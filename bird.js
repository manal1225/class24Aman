class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1
      }
      this.body = Bodies.rectangle(x, y,70,70, options);
      this.width =70;
      this.height = 70;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x = mouseX
     pos.y = mouseY
      push();
      angleMode(RADIANS)
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      
     
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  