const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var sand = [];

function setup() {
	
	createCanvas(400, 300);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	for(i = 0; i < 50; i++){
		sand[i] = new Sand(random(100, 300), random(100, 150));
	}

	ground = new StaticBox(width/2, height-40, width, 80);
	left = new StaticBox(width-5, height/2, 10, height);
	right = new StaticBox(5, height/2, 10, height);

	hammer = new Hammer;

	stone = new Stone(width/2 - 100, height/2, 50, 30);

	iron = new Iron(width/2 + 100, height/2, 50, 30);

	rubber = new Rubber(width/2, height/2, 20)
}

function draw() {
	  
	rectMode(CENTER);
  	background(0);
	  
	drawSprites();
	
	for(i = 0; i < 50; i++){
		sand[i].display();
	}

	ground.display();

	stone.display();

	iron.display();

	hammer.display();

	rubber.display();

}
