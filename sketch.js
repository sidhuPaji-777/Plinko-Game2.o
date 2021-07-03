const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground, plinko;
var division1, division2, division3, division5, division6, division7, division8, division9, division10;

var arryPlinko = [];
var particle;
var division = [];
var divisionHeight = 300;
var div;
var rand;
var count = 0;

var score = 0;
var gamestate = "play";



function setup() {
  createCanvas(480,650);
  engine = Engine.create();
	world = engine.world;
  
  // Creating ground
  ground = new Ground(width/2, height/2+318, 500, 20);
  
  
  
  // Creating Plinkos ______________________________R1
  for(var i=40; i<=width; i=i+50)
  {
    arryPlinko.push(new Plinko(i, 60));

    // Creating Plinkos ______________________________R3
    arryPlinko.push(new Plinko(i, 200));
  }
  
  // Creating Plinkos ______________________________R2
  for(var i=15; i<=width; i=i+50)
  {
    arryPlinko.push(new Plinko(i, 130));
    
    // Creating Plinkos ______________________________R4
    arryPlinko.push(new Plinko(i, 270));
    
    arryPlinko.push(new Plinko(i+5, 340));
  }
  
  
  // Creating Divisions
  for (var d = 0; d <=width; d = d + 80) {
    division.push(new Division  (d, height-divisionHeight/7, 10, divisionHeight));
  }

  
  Engine.run(engine);
}





function draw() {
  background(0);  
  text("X:"+mouseX+ " Y:"+mouseY, 10, 50);
  textSize(17);
  fill("YELLOW");
  text("Press Left Mouse Button for Spawning the Particles", 50, 30);
  
  
  
  rand = Math.round(random([60, 115, 171, 220, 270, 320, 420]));
  
  
  
  
  // Displaying plinkos
  for (var i = 0; i < arryPlinko.length; i++) 
  {
    arryPlinko[i].display();
  }

  
  //  displaying divisions 
  for (var k = 0; k < division.length; k++) {
    
    division[k].display();
  }
  
  
  // Displaying plinkos
  // for (var i = 0; i < particle.length; i++) 
  // {
    // }
    
    // Displaying score
    // if(particle.y===460)
    // {
      //   score = score+10;
      //   alert("it works")
      // }
      
      
      ground.display();
      
      
      // Adding Score
      fill("yellow")
      text("500", 27, 470);
      text("300", 107, 470);
      text("200", 187, 470);
      text("200", 267, 470);
      text("300", 347, 470);
      text("500", 427, 470);
      
      text("Score: "+score, 10, 90);



    if(particle!=null){
      particle.display();

      
      if(particle.body.position.y>460)
      {
        score = score+10;
        particle = null;
      }
    }
    
    
    // mousePressed(); 
    drawSprites();
  }
  
  
  
  function mousePressed()
  {
    if(gamestate=="play")
    {
      particle = new Particles(rand, 50, 10, 10);
  }
}