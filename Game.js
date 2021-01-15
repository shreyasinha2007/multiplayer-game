class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form= new Form()
      form.display();
    }
    car1= createSprite(100, 200)
    car1.addImage("Car1",car1img)
    car2= createSprite(250, 200)
    car2.addImage("Car2",car2img)
    car3= createSprite(400, 200)
    car3.addImage("Car3",car3img)
    car4= createSprite(550, 200)
    car4.addImage("Car4",car4img)
    cars=[car1, car2, car3, car4];
  }
  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    player.getCar();
    /*if(player.rank===4){
      game.update(2);
      console.log("game over");
    }*/
    image(track, 0, -displayHeight*2, displayWidth, displayHeight*7);

    if(allPlayers !== undefined){
      //var display_position = 130;
      var index=0;
      var y;
      var x=100;
      for(var plr in allPlayers){
        //index=index+1
        y= displayHeight-allPlayers[plr].distance
        x= x+150
        cars[index].y=y
        cars[index].x=x
        index=index+1
        if (index===player.index)
        {
          fill("red")
          ellipse(x,y,60)
          camera.position.x=displayWidth/2
          camera.position.y=cars[index-1].y
          cars[index-1].shapeColor="red"
        }
        /*if (plr === "player" + player.index){
          fill("red")
        }
        else{
          fill("black");
        }

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        */
      }
    }
    if(player.distance>3000)
    {
      gameState=2
      player.rank=player.rank + 1;
      Player.carUpdate(player.rank);
      if(player.rank===4){
        game.update(2);
        console.log("game over");
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    drawSprites();
  }
  end(){
    console.log(player.rank);
  }
}

