
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1, bob2, bobo3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	
	roof = new Roof(650, 150, 400 , 30)
	bob1 = new Bob(340, 500 , 40)
	bob2 = new Bob(420, 500 , 40)
	bob3 = new Bob(500, 500 , 40)
	bob4 = new Bob(580, 500 , 40)
	bob5 = new Bob(660, 500 , 40)
	rope1 = new Rope(roof.body, bob1.body, -160, 0)
	rope2 = new Rope(roof.body, bob2.body, -80,0)
	rope3 = new Rope(roof.body, bob3.body,0,0)
	rope4 = new Rope(roof.body, bob4.body,80,0)
	rope5 = new Rope(roof.body, bob5.body,160,0)
	Engine.run(engine);
  

}


function draw() {
background(10);

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY});

}





