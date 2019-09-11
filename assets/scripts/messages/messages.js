let messages = {
  win: () => {
    dotsArray = dots.allDots;
    pickedUpDots = 0;
    for (let i = 0; i < dotsArray.length; i++) {
      if (dotsArray[i] == null) {
        pickedUpDots++;
      }
    }

    if (pickedUpDots == dotsArray.length) {
      let winnerboard = document.querySelector("#win");
      winnerboard.style.display = "block";
      winnerboard.innerHTML = `<p>You won!!!</p>
  <p>Score: ${dots.score * timeBonus.bonus}</p>
  <p>timeBonus: ${timeBonus.bonus}</p>`;
      return true;
    }
  },

  lose: () => {
    let ghosts = createGhosts.myGhostArray;
    for (let i = 0; i < ghosts.length; i++) {
      let ghost = ghosts[i];

      if (
        ghost.x > player.playerX - 45 &&
        ghost.x < player.playerX + 15 &&
        ghost.y > player.playerY - 45 &&
        ghost.y < player.playerY + 15
      ) {
        let loserBoard = document.querySelector("#lose");
        loserBoard.style.display = "block";
        loserBoard.innerHTML = `<p>You Lose!!!</p>
  <p>Score: none at all</p>
  <p>timeBonus: is for winners</p>`;
        return true;
      }
    }
  }
};
