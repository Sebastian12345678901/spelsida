let canvas = document.getElementById("pacman");
let ctx = canvas.getContext("2d");

function draw() {
  if (canvas.getContext) {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    // drawing code here
    player.drawPlayer(ctx);
    map.drawMap();
    dots.drawDots();

    mapControll.checkIfPlayerIsOnTHeBoard();
    squareControll.squareCheck();
  }
}

setInterval(function() {
  draw();
}, 60);

controlls.startControlls();
