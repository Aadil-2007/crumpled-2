
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper1=new Paper(50,350,20);
    ground=new Ground(400,650,800,20);
  //  ground1=new Ground();
   
    dustbin1=new Dustbin(700,590,10,100);
    dustbin2=new Dustbin(500,590,10,100);
    dustbin3=new Dustbin(600,640,200,10);
    //ground.shapeColor="white";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:50});
  }
}

