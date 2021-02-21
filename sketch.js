
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render
const Constraint = Matter.Constraint
 var bob1,bob2,bob3,bob4,bob5,roof1,rope1,rope2,rope3,rope4,rope5

 var engine,world


 function setup() {
	createCanvas(1200,700);
	rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(width/2,height/2,width/7,20)
	bob1=new Bob(5,6,50,50)
	bob2=new Bob(5,6,60,60)
		

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  text(mouseX + "," + mouseY, mouseX, mouseY)


  roof.display();
  bob1.display();
  bob2.display();
  
  drawSprites();
 
}



