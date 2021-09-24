
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var slab
var slab2
var Ground
var ball

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	slab =new Slab(600,400,20,100);
	slab2 =new Ground(500,400,20,100);
	Engine.run(engine);
  

	var ball_options={
		restitution:0.55
	  }

	  var ground_options={
		isStatic:true
	  }

	  Ground=Bodies.rectangle(400,500,800,20)
	 
	  ball=Bodies.circle(50,200,20,ball_options)
	  World.add(world,ball)
	   rectMode(CENTER);
	   ellipseMode(RADIUS);
	 
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  slab2.show()
  slab.show()
  ellipse(ball.position.x,ball.position.y,20)
  force();
  drawSprites();
 
}

function force(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05})
	}
	



