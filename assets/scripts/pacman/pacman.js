let canvas = document.getElementById("pacman");
let ctx = canvas.getContext("2d");

dots.fillAllDots();

function draw() {
  if (canvas.getContext) {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    // drawing code here
    player.drawPlayer(ctx);

    map.drawMap();
    mapControll.checkIfPlayerIsOnTHeBoard();
    squareControll.squareCheck();

    dots.drawDots();
    dots.checkDotCollision();
  }
}

setInterval(function() {
  draw();
}, 60);

controlls.startControlls();
