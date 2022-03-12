class Game {
    constructor() {}
  
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
  
    update(state) {
      database.ref("/").update({
        gameState: state
      });
    }
  
    start() {
      player = new Player();
      playerCount = player.getCount();
  
      form = new Form();
      form.display();
  
      spaceship1 = createSprite(width / 2 - 50, 50);
      spaceship1.addImage("spaceship1", spaceship1Image);
      spaceship1.scale = 1.2;
  
      spaceship2 = createSprite(width / 2 + 100, height - 100);
      spaceship2.addImage("spaceship2", spaceship2Image);
      spaceship2.scale = 0.5;
  
      spaceships = [spaceship1, spaceship2];
    }
  
    handleElements() {
      form.hide();
    }
  
    play() {
      this.handleElements();
  
      Player.getPlayersInfo();
  
      if (allPlayers !== undefined) {
  
        drawSprites();
      }
    }
  }