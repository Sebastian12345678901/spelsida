let canvas = document.getElementById("pacman");
let ctx = canvas.getContext("2d");
let winGame = false;
let loseGame = false;
document.querySelector("#linkToGame").click();

dots.fillAllDots();

function draw() {
  if (canvas.getContext) {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

    player.drawPlayer(ctx);
    dots.drawDots();

    createGhosts.drawAllGhost();
    ghostAi.choseMove();

    map.drawMap();
    mapControll.checkIfPlayerIsOnTHeBoard();
    squareControll.squareCheck();

    dots.checkDotCollision();

    loseGame = messages.lose();
    winGame = messages.win();

    if (winGame) {
      clearInterval(time);
      clearInterval(game);
    }
    if (loseGame) {
      clearInterval(time);
      clearInterval(game);
    }
  }
}

let game = setInterval(draw, 60);
let time = setInterval(timeBonus.counter, 1000);

controlls.startControlls();
