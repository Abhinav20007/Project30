class Block{
  constructor(x,y,width,height){
      var options={
          friction : 1,
          density : 0.2
      }

      this.width = width;
      this.height = height;
      this.color = "skyblue";
      this.stroke = "black"
      this.body = Bodies.rectangle(x,y,this.width,this.height,options);
      World.add(world, this.body);
  }

  display(){
      if(this.body.speed < 2){
      var pos = this.body.position;
      var angle = this.body.angle;

      push()

      translate(pos.x,pos.y);
      rotate(angle);
      fill(this.color)
      stroke(this.stroke)
      rectMode(CENTER);
      rect(0,0,this.width,this.height);

      pop();
      }
      else{
          World.remove(world,this.body)
      }

  }
} 