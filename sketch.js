const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rk;
var zs;
var szn;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
rk=new Box(200,300,50,50);
zs=new Box(240,100,50,100);
szn=new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);  
    
    


    rk.display()
    zs.display()
    szn.display()
}