class Form {
  constructor() {
    this.input = createInput("Name")
    this.button = createButton('play')
    this.greeting = createElement('h2')
    this.reset = createButton("reset")
  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, displayHeight/2-100);
    
    this.input.position(130, displayHeight/2-50);
    this.button.position(250, displayHeight/2-20);

    this.reset.position(displayWidth-100, 50);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      player.update();
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, displayHeight/2-80)
    });
    this.reset.mousePressed(()=>
    {
      player.updateCount(0);
      game.update(0);
    })

  }
}
