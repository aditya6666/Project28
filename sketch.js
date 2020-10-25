var boy, boyImage;
var stone, tree, ground;
var mango, mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	boy = createSprite(200,540,20,20);
	boy.addImage(boyImage);
	boy.scale = 0.09;
	stone = new Stone(150,480);
	tree = new Tree(550,200,200,400);
	ground = new Ground(500,600,800,20);
	mango1 = new Mango(600,230,40);
	mango2 = new Mango(650,270,50);
	mango3 = new Mango(640,210,80);
	mango4 = new Mango(695,320,60);
	mango5 = new Mango(700,300,70);
	mango6 = new Mango(595,260,45);
	mango7 = new Mango(650,300,20);
	mango8 = new Mango(630,290,55);
	mango9 = new Mango(585,340,30);
	mango10 = new Mango(580,315,20);
	launcher = new Launcher(stone.body, {x: 150, y:480});
	Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("white");
  stone.display();
  boy.display();
  tree.display();
  ground.display();
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
  launcher.display();
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
  drawSprites();
 
}
function mouseReleased(){
	launcher.fly();
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}
function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+stone.r){
		Matter.Body.setStatic(mangoBody,false);
	}
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body, {x:150, y:480});
		launcher.attach(stone.body);
	}
}

