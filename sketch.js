const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1, box2, box3, box4, box5, box6;

var ball, chain;
function setup(){


createCanvas(1600,800);


engine = Engine.create();
world = engine.world;

ground = new Ground(800,600,1600,10);

box1 = new Box(700,550,70,70);
box2 = new Box(770,550,70,70);
box3 = new Box(840,550,70,70);
box4 = new Box(740,480,70,70);
box5 = new Box(810,480,70,70);
box6 = new Box(770,410,70,70);

ball = new Ball(500,400,80,80);
chain = new Chain(ball.body,{x:470,y:200})

}

function draw(){
background("black");
Engine.update(engine);

ground.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
ball.display();
chain.display();
}


function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }
