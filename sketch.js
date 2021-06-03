const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var b1,b2,b3,b4,b5,b6,b7,b8,b9 ;
var ball,box
var sling1,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
function preload(){
  polygon_img=loadImage("polygon.png");
box=loadImage("block.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;  
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  
 ball = new Ball();
 sling1 = new slingshot(ball.body,{x:100,y:190})
  //level one
  block1 = new Block(300,275,30,40);
  
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
// stand2
  
b1 = new Block(660,195,30,40);
  
b2 = new Block(670,195,30,40);
b3 = new Block(690,195,30,40);
b4 = new Block(710,195,30,40);
b5 = new Block(730,195,30,40);
b6 = new Block(670,175,30,40);
b7 = new Block(690,175,30,40);
b8 = new Block(710,175,30,40);
b9 = new Block(690,155,30,40);
}
function draw() {
  background(56,44,44); 
 sling1.display();
  textSize(20);
  fill("lightyellow");
  text("Press Space to get a second Chance to Play!!",50 ,50);
ball.display();  

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
 
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 b1.display();
b2.display();
b3.display();
b4.display();
b5.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  b9.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  b6.display();
  b7.display();
  b8.display();
  fill("grey");
  block16.display();
 
  if(keyDown("space")){
    sling1.attach(ball.body)
    
    }
}
function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
   
   }
   
   function mouseReleased(){
   
   sling1.fly()
   
   
   }
