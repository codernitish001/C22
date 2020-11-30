// this is the first part without pckage and the second will be with package
var helicopterIMG, helicopterSprite;
var ground;
var bg;
var box1,box2,box3;
var world,engine;
const E=Matter.Engine;
const B=Matter.Bodies;
const W=Matter.World;
function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	bg=loadImage('bg.jpg');
}

function setup() {
	createCanvas(800, 700);
	
	helicopterSprite=createSprite(-100,100,10,10);
	helicopterSprite.addImage(helicopterIMG);
	engine=E.create();
	world=engine.world;	
	rectMode(CENTER);
	var options={
		isStatic:true,
	}
	ground=B.rectangle(400,690,800,20,options);
	W.add(world,ground);
	box1=B.rectangle(550,630,30,100,options);
	W.add(world,box1);
	box2=B.rectangle(630,665,130,30,options);
	W.add(world,box2);
	box3=B.rectangle(700,630,30,100,options);
	W.add(world,box3); 	
}


function draw() {
  background(bg);
  E.update(engine);
  fill("brown");
  rect(ground.position.x,ground.position.y,800,20);
  fill("red");
  rect(box1.position.x,box1.position.y,30,100);
  rect(box2.position.x,box2.position.y,130,30);
  rect(box3.position.x,box3.position.y,30,100);
  drawSprites();
  helicopterSprite.x+=5;
  if(helicopterSprite.x>900){
   helicopterSprite.x=-100;
  }
}
