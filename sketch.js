const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var divisionHeight = 300;
var division, division2, division3,division4, division5, division6, division7;
var particle;
var plinko;

var particles = [];
var divisions = [];
var plinkos = [];

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,780,480,20);
 
 division = new Division(100,610, 10, 300);
 division2 = new Division(180,610,10,300);
  division3 = new Division(260,610,10,300);
  division4 = new Division(320,610, 10, 300);
  division5 = new Division(400,610,10,300);
  division6 = new Division(470,610,10,300);
  division7 = new Division(10, 610, 10, 300);
  particle = new Particle(240, 200,10);
  // plinko = new Plinko(260, 200, 10);
}

function draw() {
  background(0,0,0);  
  drawSprites();
  ground.display();
  

  division.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  // particle.display();
  // plinko.display();

  for(var j = 0; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175,10));
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,275,10));
  }

  for(var j= 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }

  for(var j= 0; j < particles.length; j++){
    particles[j].display();
  }

}