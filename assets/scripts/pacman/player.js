let player = {
  playerX: 275,
  playerY: 425,

  moveUp: function(movingUp) {
    player.playerY -= 5;
  },
  moveDown: function(movingDown) {
    player.playerY += 5;
  },
  moveRight: function(movingRight) {
    player.playerX += 5;
  },
  moveLeft: function(movingLeft) {
    player.playerX -= 5;
  },

  drawPlayer: function(ctx) {
    ctx.beginPath();

    ctx.arc(
      /* ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise); */
      this.playerX,
      this.playerY,
      18,
      0,
      Math.PI + (Math.PI * 360) / 2 /* End point on circle */,
      0
    );
    ctx.fillStyle = "rgb(255,255 ,0)";
    ctx.fill();
  }
};
