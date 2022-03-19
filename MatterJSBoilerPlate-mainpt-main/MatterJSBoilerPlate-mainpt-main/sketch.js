
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
config = {
	isStatic:true
}
b1 = Bodies.circle(100,350,99.999999999)
World.add(world,b1)
b2 = Bodies.rectangle(600,250,99.999999999,70)
World.add(world,b2)
b3 = Bodies.rectangle(500,150,99.999999999,99.999999999)
World.add(world,b3)
b4 = Bodies.rectangle(400,650,800,10,config)
World.add(world,b4)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
Engine.update(engine);
 rect(b2.position.x,b2.position.y,99.999999999,70)
 rect(b3.position.x,b3.position.y,99.999999999,99.999999999)
ellipse(b1.position.x,b1.position.y,99.999999999)
rect(b4.position.x,b4.position.y,800,10)

}



