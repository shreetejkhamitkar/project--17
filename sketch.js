var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var ground,groundImage,invisibleGround;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600,600);
  
var survivalTime=0;
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
//monkey.velocityX=4;

ground=createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x=ground.width/2;
console.log(ground.x);
  
//invisibleGround = createSprite(200,190,400,10);
//invisibleGround.visible = false;



obstacleGroup=new Group();
foodGroup=new Group();
  
score=0;
  
}


function draw() {
background(250);
 
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
    
   if(keyDown("space")){
      monkey.velocityY = -12 ;}
  
  monkey.velocityY =monkey.velocityY + 0.8; 

monkey.collide(ground);
MonkeyObstacles();
Monkeyfood();
  
    

drawSprites();
stroke("white");
textSize(20);
fill("white");
text("Score: "+ score, 500,50);   

if(obstacleGroup.isTouching(monkey)){
  ground.velocityX = 0;
  monkey.velocityY = 0;
  obstacleGroup.setVelocityXEach(0);
  foodGroup.setVelocityXEach(0);
  obstacleGroup.setLifetimeEach(-1);
  foodGroup.setLifetimeEach(-1);
  foodGroup.destroyEach();
  survivalTime =0;
  
//text("Score:"+score,500,50);
 }
       

stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate()) 
text("Survival Time: "+ survivalTime, 100,50);
  
 
 
}

function Monkeyfood(){
if (frameCount % 80 === 0) {
    var food = createSprite(600,250,40,10);
    food.y = Math.round(random(120,200));
    food.velocityX = -5;
  food.lifetime=300;
  monkey.depth = food.depth + 1;
    food.addImage(bananaImage);
    food.scale = 0.1;
    
    
    foodGroup.add(food);
}
}
  
function MonkeyObstacles(){
if (frameCount % 300 === 0) {
    var obstacle = createSprite(800,320,10,40);
    //obstacle.y = Math.round(random(80,120));
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
}
}







