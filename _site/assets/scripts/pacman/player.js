let player = {
  playerX: 275,
  playerY: 425,
  playerSpeed: 10,

  moveUp: function() {
    player.playerY -= player.playerSpeed;
  },
  moveDown: function() {
    player.playerY += player.playerSpeed;
  },
  moveRight: function() {
    player.playerX += player.playerSpeed;
  },
  moveLeft: function() {
    player.playerX -= player.playerSpeed;
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
