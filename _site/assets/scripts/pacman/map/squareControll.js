let squareControll = {
  AllSquares: [
    [50, 50, 50, 50],
    [150, 50, 50, 50],
    [250, 0, 50, 100],
    [350, 50, 50, 50],
    [450, 50, 50, 50],
    [50, 150, 50, 250],
    [150, 150, 250, 50],
    [450, 150, 50, 250],
    [150, 250, 100, 50],
    [300, 250, 100, 50],
    [150, 350, 250, 50],
    [50, 450, 50, 50],
    [150, 450, 50, 50],
    [250, 450, 50, 100],
    [350, 450, 50, 50],
    [450, 450, 50, 5]
  ],

  squareCheck: () => {
    squareControll.AllSquares.forEach(square => {
      x = square[0];
      y = square[1];
      w = square[2];
      h = square[3];

      //checks if there is a collosion, next up is to see from wich direction.
      if (
        player.playerX > x - 25 &&
        player.playerX < x + w + 20 &&
        player.playerY > y - 25 &&
        player.playerY < y + h + 25
      ) {
        //when player colides from left to right
        if (player.playerX > x - 25 && player.playerX < x + 25) {
          player.playerX = x - 25;
        }

        //when player colides from right to left

        if (player.playerX < x + w + 20 && player.playerX > x + w) {
          player.playerX = x + w + 25;
        }

        //when player colides from bot to top
        if (player.playerY < y + h + 25 && player.playerY > y + h) {
          player.playerY = y + h + 25;
        }

        //when player colides from top to bot
        if (player.playerY > y - 25 && player.playerY < y + 5) {
          player.playerY = y - 25;
        }
      }
    });
  }
};
