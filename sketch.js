var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var SurvivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,400)
  edges = createEdgeSprites();
  
  
  
   monkey=createSprite(200,330,20,20)
  monkey.scale = 0.1;
  monkey.addAnimation("running", monkey_running);
  
  
  
  ground=createSprite(400,350,900,10)
 ground.velocityX=-4
  ground.x = ground.width /2;
  
   
  score=0
  
  SurvivalTime=0
 
 
  
}


function draw() {

  background("#00cca3")
  
  
  stroke("white")
textSize(20)
fill("white")
text("score:" + score,400,50)
stroke( "black")
textSize(20)
fill( "black")
SurvivalTime=Math. ceil(frameCount/frameRate())
text("SurvivalTime: "+ SurvivalTime, 100,50)
  
  
  
     
     
  
  
  
  
  
  
  monkey.collide(ground)
 
  spawnbanana()
  spawnObstacles();
  drawSprites ()

  
  
  
  
if (keyDown("space")&& monkey.y>160) {
  monkey.velocityY = -10;
}

monkey.velocityY = monkey.velocityY + 0.8


if (ground.x < 400) {
  ground.x = ground.width / 2;
}
}


function spawnObstacles(){
  if(frameCount%300===0){
   var obstacle =createSprite(500,330,20,20)
   obstacle.collide(ground)
   obstacle.addImage(obstacleImage)
    obstacle.scale=0.1
  obstacle.velocityX=-2
   obstacle.lifetime=330
   }
}

function spawnbanana(){
  if(frameCount%90===0){
   var banana =createSprite(500,330,20,20)
   
   banana.addImage(bananaImage)
    banana.y = Math.round(random(120,200))
   banana.scale=0.1
  banana.velocityX=-2
   banana.lifetime=330
   }
}

