var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;
var car1, car2, car3, car4, cars;
var car1img, car2img, car3img, car4img;
var track;
function preload(){
  car1img=loadImage("images/images/car1.png");
  car2img=loadImage("images/images/car2.png");
  car3img=loadImage("images/images/car3.png");
  car4img=loadImage("images/images/car4.png");
  track= loadImage("images/images/track.png");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState===2)
  {
    //game.update(2)
    game.end();
  }
}
