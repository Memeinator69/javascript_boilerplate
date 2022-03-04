/*var fixed_rectangle
var moving_rectangle
var game_obi_one
var game_obi_two
var game_obi_three
var game_obi_four
function setup() {
  createCanvas(1200,800);
  fixed_rectangle=createSprite(200,200,50,80);
  moving_rectangle=createSprite(400,200,80,30);
  game_obi_one=createSprite(100,100,50,50);
  game_obi_two=createSprite(200,100,50,50);
  game_obi_three=createSprite(300,100,50,50);
  game_obi_four=createSprite(400,100,50,50);
  fixed_rectangle.shapeColor="green";
  moving_rectangle.shapeColor="green";
  game_obi_one.shapeColor="green";
  game_obi_two.shapeColor="green";
  game_obi_three.shapeColor="green";
  game_obi_four.shapeColor="green";
}
function draw() {
  background(0,0,0);  
  moving_rectangle.y=World.mouseY
  moving_rectangle.x=World.mouseX
  if(is_touching(moving_rectangle,game_obi_one)){
    moving_rectangle.shapeColor="red"
    game_obi_one.shapeColor="red"
  }
  else{
    moving_rectangle.shapeColor="green"
    game_obi_one.shapeColor="green"
  }
drawSprites();
}
function is_touching(obi_1,obi_2){
  if(obi_1.x-obi_2.x<obi_2.width/2+obi_1.width/2
    && obi_2.x-obi_1.x<obi_2.width/2+obi_1.width/2
    &&obi_1.y-obi_2.y<obi_2.height/2+obi_1.height/2
    && obi_2.y-obi_1.y<obi_2.height/2+obi_1.height/2){
    return true

  }
  else{
    return false

  }
}*/
var fixedRect, movingRect;
function setup(){

  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 bounce_off(movingRect,fixedRect);
   
  
  drawSprites();
}

function bounce_off(a,b){
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2) {
    a.velocityX = a.velocityX * (-1);
    b.velocityX = b.velocityX * (-1);
}
if (a.y - b.y < b.height/2 + a.height/2
  && b.y - a.y < b.height/2 + a.height/2){
  a.velocityY = a.velocityY * (-1);
  b.velocityY = b.velocityY * (-1);
  

}
}