const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  fill("black");
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new GROUND(240,800,480,50);

  for(var k=0; k<=width; k=k+80){
    divisions.push(new DIVISIONS(k, height-divisionHeight/2,10,divisionHeight ));
  }

  for(var j=40; j<=width; j=j+50){
    plinkos.push(new PLINKO(j,75,10));
  }
  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new PLINKO(j,175,10));
  }
  for(var j=40; j<=width; j=j+50){
    plinkos.push(new PLINKO(j,275,10));
  }
  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new PLINKO(j,375,10));
  }
  for(var j=40; j<=width; j=j+50){
    plinkos.push(new PLINKO(j,475,10));
  }

}

function draw() {
  background(0,0,0);

  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new PARTICLES(random(width/2-10,width/2+10),5,5));
  }

  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }

  for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }

  for(var n=0; n<particles.length; n++){
    particles[n].display();
  }

  ground.display();

  drawSprites();
} 