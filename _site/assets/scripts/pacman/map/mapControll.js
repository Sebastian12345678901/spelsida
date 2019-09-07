let mapControll = {
  checkIfPlayerIsOnTHeBoard: () => {
    //check right
    if (player.playerX > 525) {
      player.playerX = 525;
    } else if (player.playerX < 25) {
      player.playerX = 25;
    }

    if (player.playerY > 525) {
      player.playerY = 525;
    } else if (player.playerY < 25) {
      player.playerY = 25;
    }
  }
};
