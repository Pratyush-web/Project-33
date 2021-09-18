const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bgImg;
var snow = [];
var boy, girl;

function preload()
{
  bgImg = loadImage("snow1.jpg");
}

function setup() 
{
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  boy = createSprite(500, 300, 100, 100);
  boy.shapeColor = "blue";

  girl = createSprite(300, 300, 100, 100);
  girl.shapeColor = "pink";
}

function draw() 
{
  background(bgImg);  
  Engine.update(engine);

  if(frameCount%20 === 0)
  snow.push(new Snow(random(10, 700), 5, 20, 20));
  
  for(var k = 0; k < snow.length; k++)
  snow[k].display();

  if(keyDown(LEFT_ARROW))
  {
    boy.x = boy.x-1;
    girl.x = girl.x-1;
  }
  if(keyDown(RIGHT_ARROW))
  {
    boy.x = boy.x+1;
    girl.x = girl.x+1;
  }
  if(keyDown(UP_ARROW))
  {
    boy.y = boy.y-1;
    girl.y = girl.y-1;
  }
  if(keyDown(DOWN_ARROW))
  {
    boy.y = boy.y+1;
    girl.y = girl.y+1;
  }

  drawSprites();
}
