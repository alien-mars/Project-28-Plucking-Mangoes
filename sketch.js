
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree;
var skyImg;
var boy, boyImg;
var stone;
var slingShot;
var mango1,mango2,mango3,mango4,mango5;
var mango6,mango7,mango8,mango9,mango10;

function preload()
{
	boyImg = loadImage("boy.png");
	skyImg = loadImage("sky.png");
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(500,595,1000,10);

	tree = new Tree(760,340,10,10);

	boy = createSprite(200,520,50,50);
	boy.addImage(boyImg);
	boy.scale = 0.12;

	stone = new Stone(140,450,22);

	slingShot = new SlingShot(stone.body,{x:140,y:450});

	mango1 = new Mango(700,180,25);
	mango2 = new Mango(600,230,25);
	mango3 = new Mango(680,280,25);
	mango4 = new Mango(750,240,25);
	mango5 = new Mango(800,130,25);
	mango6 = new Mango(850,200,25);
	mango7 = new Mango(950,250,25);
	mango8 = new Mango(900,300,25);
	mango9 = new Mango(830,280,25);
	mango10 = new Mango(630,320,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(skyImg);

  fill(0);
  textSize(24);
  text("Press Space To Get Another Chance!!",200,50);
  text("Reload To Start Again!",250,80);

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 detectCollision(stone,mango8);
 detectCollision(stone,mango9);
 detectCollision(stone,mango10);

 keyPressed();
  
  ground.display();
  tree.display();
  slingShot.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  drawSprites();

  stone.display();
 
}

function detectCollision(stone,mango){
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	slingShot.fly();
}


function keyPressed(){
	if(keyDown("space")){
		Matter.Body.setPosition(stone.body,{x:140,y:450});
		slingShot.attach(stone.body);
	}
	
}
