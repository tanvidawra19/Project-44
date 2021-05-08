var snake;
var food;
var score=0;
var rez = 20;
var w;
var h;
var bgImg;
var length = 0;
var gameState = "play";

function preload() {
  bgImg = loadImage("gameOverScreen.jpg");
}

function setup(){
    var canvas = createCanvas(600,500);
    w = floor(width/rez);
    h = floor(height/rez);
    frameRate(5);
    snake = new Snake();
    foodLocation();
    console.log(h);
}

function foodLocation(){
    var x = floor(random(w))
    var y = floor(random(h))
    food = createVector(x,y)
  }
  
  function keyPressed(){
    if (keyCode === LEFT_ARROW){
      snake.setDirection(-1,0)
    } else if (keyCode === RIGHT_ARROW){
      snake.setDirection(1,0)
    }else if (keyCode === DOWN_ARROW){
      snake.setDirection(0,1)
    }else if (keyCode === UP_ARROW){
      snake.setDirection(0,-1)
    }
  }
function draw(){
  if(gameState === "play"){
    background("black");
  noStroke();
  strokeWeight(0)
  fill("white")
  textFont("Alternate Gothic")
  textSize(25)
  text("Score : " + score, 40,40);

  scale(rez)

  if (snake.eat(food)){
    score = score+10 ;
    console.log(score);
    foodLocation();
  }
  
  snake.update();
  snake.show();
  
  if(snake.endGame()){
    gameState = "end";
   }
  stroke("black");
  strokeWeight(0.1);
  fill("red");
  rect(food.x , food.y ,1,1);
 }

 else if(gameState === "end"){
   background(bgImg);
  snake.visible = false ;
  food.visible = false ;
  /*noLoop();
  textSize(20);
  fill("lightblue");
  stroke("blue");
  strokeWeight(1);
  text("GAME OVER !!",300,250);
  console.log(snake.visible);
  */
 }
}

