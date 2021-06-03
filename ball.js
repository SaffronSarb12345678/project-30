class Ball{

    constructor(){
        var ground_options={
            isStatic : false
          }
        
          this.body = Bodies.circle(100,200,20,ground_options)
          World.add(world,this.body);
          this.image = loadImage("polygon.png")
    }
    display(){
        noStroke();
        fill(188,67,67);
        imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
}