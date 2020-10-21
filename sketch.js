const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground,trees;
var Mango1,Mango2,Mango3,Mango4,Mango5,Mango6,Mango7,Mango8;
var stoneobj,man;

function setup() {
createCanvas(1200, 700);

engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
stones = new stone(235,420,30); 
trees = new tree(1050,580); 
ground = new Ground(width/2,600,width,20); 
mango1 = new mango(1100,100,30); 
mango2 = new mango(1170,130,30); 
mango3 = new mango(1010,140,30); 
mango4 = new mango(1000,70,30); 
mango5 = new mango(1100,70,30); 
launcherObject=new launcher(stones.body,{x:235,y:420})
man =new boy(200,575,200,400);

Engine.run(engine);
}

function draw() {
rectMode(CENTER);
background(230);
Ground.display();
trees.display();
Mango1.display();
Mango2.display();
Mango3.display();
Mango4.display();
Mango5.display();
Mango6.display();
Mango7.display();
Mango8.display();
stoneobj.display();
man.display();
detectcollision(stones,mango1);
detectcollision(stones,mango2);
detectcollision(stones,mango3);
detectcollision(stones,mango4);
detectcollision(stones,mango5);

drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(stoneobj.body, {x:mouseX , y:mouseY});
    
}
    
function mouseReleased(){
stoneobj.fly();
    
}

function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
    
var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
}

}
    
function keypressed() {
if (keyCode === 32){
Matter.Body.setPosition(stoneObj.body,{x:235, y:420})
man.attach(stones.body);
}
}