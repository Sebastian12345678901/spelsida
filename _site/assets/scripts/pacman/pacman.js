let canvas = document.getElementById("pacman");

function draw() {
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    // drawing code here
    player.drawPlayer(ctx);
    map.drawMap();
  }
}

setInterval(function() {
  draw();
}, 60);

controlls.startControlls();
