const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button;
var button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ball = Bodies.circle(100,200,10)
  World.add(world,ball)
  
  ground =new Ground(200,390,400,20);
  right = new Ground(320,355,20,50);
  left = new Ground(175,355,20,50);
  top_wall = new Ground(200,10,400,20);
  left_wall = new Ground(320,355,20,50);
  right_wall = new Ground(320,355,20,50);

 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  button = createImg("leftarroww.png")
  button.position(50,50)
  button.size(50,50)
  button.mouseClicked(vforce)

  button = createImg("right.png")
  button.position(200,50)
  button.size(50,50)
  button.mouseClicked(hforce)


}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 10)
}

function vforce()
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:-0.003, y:0})
}

function hforce()
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.003, y:0})
}