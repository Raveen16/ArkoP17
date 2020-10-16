var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){

monkey_running = loadAnimation("sprite_0.png", "sprite_1.png","sprite_2.png","sprite_3.png",   "sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
createCanvas(400,400);
score = 0
ground = createSprite(400,320,800,10)
monkey = createSprite(40,300,70,70)
monkey.addAnimation("monkey", monkey_running);
monkey.scale = 0.1
FoodGroup = new Group ();
obstacleGroup = new Group ();
PLAY = 1;
END = 0;
gameState = PLAY
}

function draw() {
background ("white")
ground.velocityX = -5;
if (frameCount % 20 === 0) {
score = score+1;
}
textSize(20);
text ("Survival Time: " + score, 200, 30)
if (keyDown("space")) {
monkey.velocityY = -7;
}
monkey.velocityY = monkey.velocityY + 0.8;
if (ground.x < 0) {
ground.x = ground.width/2
}
if (obstacleGroup.isTouching(monkey)) {
gameState = END;
totalReset ();
}
if (monkey.isTouching(FoodGroup)) {
FoodGroup.destroy;
}
monkey.collide(ground);
Points ();
Enemies();
FoodGroup.x = obstacleGroup.x;
drawSprites();
}

function Points () {
if (frameCount%70 === 0) {
banana = createSprite(400,Math.round(random(200,270)),70,70)
banana.addImage(bananaImage);
banana.scale = 0.1;
banana.velocityX = -3;
banana.lifetime = 130;
FoodGroup.add(banana);
}
}

function Enemies () {
if (frameCount%70 === 0) {
obstacle = createSprite(400,310,70,70)
  obstacle.scale = 0.1;
  obstacle.velocityX = -3;
obstacle.addImage(obstacleImage);
obstacle.lifetime = 100;
obstacleGroup.add(obstacle);
}
}
function totalReset () {
monkey.velocityX = 0;
score = 0;
}





  
  