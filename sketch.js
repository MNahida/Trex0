
var trex ,trex_running;

function preload(){
  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,20,50);
  trex.addAnimation("trex running",trex_running);
  trex.scale=0.5;

  edge=createEdgeSprites();
}

function draw(){
  background("white");

  console.log(trex.y);
  
  if (keyDown("space") && trex.y>150){
    trex.velocityY=-10;
  }
  
  trex.velocityY=trex.velocityY+0.5;

  trex.collide(edge[3]);

  drawSprites();

}
