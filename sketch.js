// You could have multiple flags like: start, launch to indicate the state of the game.
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var ball;
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    engine=Engine.create();
    world=engine.world;
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1420,800);
    ground= new Ground(1420/2,790,1420,20);
    tank=new Tanker(340,735,-PI);
}

function draw() {
    background(0);
    Engine.update(engine);
    ground.display();
    tank.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}