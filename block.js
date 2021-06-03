class Block{
    constructor(x, y, width, height) {
     
      var options = {
                restitution : 0.5     
        }
        
       
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("block.png")
       
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        
        
        if(this.body.speed<3){
   push();
          translate(pos.x, pos.y);
          angleMode(RADIANS)
          rotate(angle);
         
          imageMode(CENTER)  
          image(this.image,0,0,this.width,this.height)
pop();
      }
      
     
      else{
      World.remove(world,this.body)
      push();
      this.vis = this.vis-7.5
      tint(255,this.vis)
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      pop();
  

      }
      
  
        
      }
}
