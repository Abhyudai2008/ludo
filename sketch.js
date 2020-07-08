var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var blue1,blue2,lue3,blue4,dice1,dice2,dice3,dice4,dice5,dice6,green1,green2,green3,green4,lodo,red1,red2,red3,red4,yellow1,yellow2,yellow3,yellow4;

function preload(){
  ludoImage = loadImage("images/ludo bg.png");
  blue1Image = loadImage("images/blue.png");
}
function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  ludo = createSprite(200,200);
  blue1 = createSprite(200,200);
}

drawSprites();
  
function draw(){
 background("white")
 text(mouseX+","+mouseY,mouseX,mouseY)
 
  if (playerCount === 4) {
    gameState = "start"
  }
  if (gameState==="start") {
    //clear()
    //form.hide()
    background (ludoImage)
  }
  if(gameState === 1){
    clear();
    form.hide();
    game.play();
  }
}
