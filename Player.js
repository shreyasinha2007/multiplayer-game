class Player {
  constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
    this.rank=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "player/player" + this.index;
    database.ref(playerIndex).set({
      name : this.name,
      distance : this.distance
    });
  }
  static getPlayerInfo(){
    var playerInfoRef = database.ref('player');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
}
getCar(){
  var playerRate= database.ref('carEnd');
  playerRate.on("value",(data)=>{
    this.rank=data.val();
  })
}
static carUpdate(a){
database.ref('/').update({
  carEnd : a 
})
}
}
