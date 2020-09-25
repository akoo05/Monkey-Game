var monkey, monkeyimg,banana, bananaimg, jungle, jungleimg, stone, stoneimg;
var background1; score=0; groundvisible=true;

function preload() {

jungleimg = loadImage("jungle.jpg");
monkeyimg=loadImage("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
bananaimg=loadImage("banana.png");
stoneimg=loadImage("stone.png");
}

function setup() {
  createCanvas(600,200);
background1 = createSprite(300,100);
background1.addImage("background1",jungleimg);
background1.velocityX = -2;
background1.x = background1.width/2;
  
groundvisible = createSprite(1200/2,200/2);
groundvisible.visible = false;
  
player = createSprite(50,346,10,10);
player.addImage("player",monkeyimg);
player.scale = 0.2;
  
obstacleGroup = new Group();
bananaGroup = new Group();
  
}
function draw(){
background(jungle);
  monkey.collide(groundvisible);
  
  food();
  obstacles();
  
  stroke("white");
  textSize(20);
  fill("white")
  text("SCORE: "+score,500,50);
  
  if(KeyWentDown("space") && player.y >=221){
    player.velocityY = -13;
  }
  
  if(bananagroup.isTouching(player)){
    bananagroup.destroyEach();
    score = score + 2;
  }
  if(obstacleGroup.isTouching(player)){
    obstacleGroup.destroyEach();
    player.scale = 0.2;
    player.velocity = 0;
  }
  switch(score){
    case 10: player.scale = 0.12;
            break;
    case 20: player.scale = 0.14;
            break;
    case 30: player.scale = 0.16;
            break;
    case 40: player.scale = 0.18;
            break;        
    default: break; 
    
}
  drawSprites();
}

function food() {
  if (World.frameCount % 80 === 0) {
    banana = createSprite(400,300,10,10);
    banana.y = randomNumber(120,200);
    banana.addImage("banana",bananaimg);
    banana.scale = 0.07;
    banana.velocityX = -4;
    
     //assign lifetime to the variable
    banana.lifetime = 100;
    //add each banana to the group
    bananaGroup.add(banana);
    }
}
function obstacles() {
  if(World.frameCount % 300 === 0) {
    obstacle = createSprite(400,360,15,15);
    obstacle.velocityX = -6;
    obstacle.addImage("obstacle",stoneimg);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.12;
    obstacle.lifetime = 120;
    obstacle.collide(groundimg);
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
}
}
