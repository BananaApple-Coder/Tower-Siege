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
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
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

  Ablock1 = new Block(300+310,275-100,30,40);
  Ablock2 = new Block(330+310,275-100,30,40);
  Ablock3 = new Block(360+310,275-100,30,40);
  Ablock4 = new Block(390+310,275-100,30,40);
  Ablock5 = new Block(420+310,275-100,30,40);
  Ablock6 = new Block(450+310,275-100,30,40);
  Ablock7 = new Block(480+310,275-100,30,40);
  //level two
  Ablock8 = new Block(330+310,235-100,30,40);
  Ablock9 = new Block(360+310,235-100,30,40);
  Ablock10 = new Block(390+310,235-100,30,40);
  Ablock11 = new Block(420+310,235-100,30,40);
  Ablock12 = new Block(450+310,235-100,30,40);
  //level three
  Ablock13 = new Block(360+310,195-100,30,40);
  Ablock14 = new Block(390+310,195-100,30,40);
  Ablock15 = new Block(420+310,195-100,30,40);
  //top
  Ablock16 = new Block(390+310,155-100,30,40);

object = new obj(100, 200, 15)
slingshot = new sling(object.body, {x:100,y:200})
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

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
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue");
  Ablock1.display();
  Ablock2.display();
  Ablock3.display();
  Ablock4.display();
  Ablock5.display();
  Ablock6.display();
  Ablock7.display();
  fill("pink");
  Ablock8.display();
  Ablock9.display();
  Ablock10.display();
  Ablock11.display();
  Ablock12.display();
  fill("turquoise");
  Ablock13.display();
  Ablock14.display();
  Ablock15.display();
  fill("grey");
  Ablock16.display();
 
  object.display()

  slingshot.display()
}

function mouseDragged(){
  Matter.Body.setPosition(object.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
  slingshot.destroy()
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(object.body);
      Matter.Body.setPosition(object.body, {x:100, y:200})
  }
}
