var ship, ship_moving;
var seaImage;
var sea ;
function preload(){
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(300,180,200,20)
  sea.addImage("sea",seaImage);

  ship = createSprite(150,100,100,30);
  ship.addAnimation("moving", ship_moving);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  ship.scale = 0.2
  //ship.y = 20

 
}

function draw(){
 background("blue");
   console.log(sea.width)

 // if(keyDown("space")){
    //ship.velocityY = -10;
//  }
  
 // ship.velocityY = ship.velocityY + 0.4;
  sea.velocityX = -3
  if(sea.x <0){
   sea.x = sea.width/2
   
  }

  // ship.collide(sea)
  drawSprites();
}



 
