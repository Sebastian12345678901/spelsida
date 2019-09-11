let ghostAi = {
  mapArray: [],

  createMapArray: function() {
    for (x = 15; x < 515; x += 1) {
      ghostAi.mapArray[x] = [];
      for (y = 15; y < 515; y += 1) {
        ghostAi.mapArray[x][y] = y;
      }
    }
  },

  //hur i helvete vet jag ifall x är större än y?
  //penna och papper kanske är en bra ide!
  checkSizeOnXandY() {
    let array = [];

    for (let i = 0; i < createGhosts.myGhostArray.length; i++) {
      let px = player.playerX;
      let py = player.playerY;

      let gx = createGhosts.myGhostArray[i].x;
      let gy = createGhosts.myGhostArray[i].y;

      let distanceInX = gx - px;
      let distanceInY = gy - py;

      if (distanceInY < 0) {
        distanceInY = distanceInY * -1;
      }
      if (distanceInX < 0) {
        distanceInX = distanceInX * -1;
      }

      if (distanceInX > distanceInY) {
        array[i] = "x";
      } else {
        array[i] = "y";
      }
    }
    return array;
  },

  checkIfGhostIsOnAPath: (gx, gy) => {
    let pathsX = [];
    let pathsY = [];

    //checks where the ghost is and where the phats are.
    if (gy == 15) {
      pathsY = [15];
      pathsX = [15, 115, 215, 315, 415, 515];
    } else if (gy == 515) {
      pathsY = [515];
      pathsX = [15, 115, 215, 315, 415, 515];
    } else if (gy == 115) {
      pathsY = [115];
      pathsX = [15, 115, 215, 315, 415, 515];
    } else if (gy == 415) {
      pathsY = [415];
      pathsX = [15, 115, 215, 315, 415, 515];
    } else if (gy == 215) {
      pathsY = [215];
      pathsX = [115, 265, 415];
    } else if (gy == 315) {
      pathsY = [315];
      pathsX = [115, 265, 415];
    }
    //here we check if your on a cross road ,x,y
    for (let i = 0; i < pathsX.length; i++) {
      if (gx == pathsX[i]) {
        for (j = 0; j < pathsY.length; j++) {
          if (gy == pathsY[j]) {
            return true;
          }
        }
      }
    }
  },

  collosionControll: axis => {
    createGhosts.myGhostArray.forEach(ghost => {
      squareControll.AllSquares.forEach(square => {
        x = square[0];
        y = square[1];
        w = square[2];
        h = square[3];

        if (
          ghost.x > x - 35 &&
          ghost.x < x + w + 15 &&
          ghost.y > y - 35 &&
          ghost.y < y + h + 15
        ) {
          //when player colides from left to right
          if (ghost.x > x - 35 && ghost.x < x + 35) {
            ghost.x = x - 35;
            if (player.playerY > ghost.y && ghost.y < 415) {
              ghost.y += 5;
              ghost.moveUp = false;
              ghost.moveDown = true;
              ghost.moveRight = false;
              ghost.moveLeft = false;
            } else {
              ghost.y -= 5;
              ghost.moveUp = true;
              ghost.moveDown = false;
              ghost.moveRight = false;
              ghost.moveLeft = false;
            }
          }

          //when player colides from right to left

          if (ghost.x < x + w + 30 && ghost.x > x + w) {
            ghost.x = x + w + 15;
            if (player.playerY > ghost.y && ghost.y < 515) {
              ghost.y += 5;
              ghost.moveUp = false;
              ghost.moveDown = true;
              ghost.moveRight = false;
              ghost.moveLeft = false;
            } else {
              ghost.y -= 5;
              ghost.moveUp = true;
              ghost.moveDown = false;
              ghost.moveRight = false;
              ghost.moveLeft = false;
            }
          }

          //when player colides from bot to top
          if (ghost.y < y + h + 15 && ghost.y > y + h) {
            ghost.y = y + h + 15;
            if (player.playerX > ghost.x) {
              ghost.x += 5;
              ghost.moveUp = false;
              ghost.moveDown = false;
              ghost.moveRight = true;
              ghost.moveLeft = false;
            } else {
              ghost.x -= 5;
              ghost.moveUp = false;
              ghost.moveDown = false;
              ghost.moveRight = false;
              ghost.moveLeft = true;
            }
          }

          //when player colides from top to bot
          if (ghost.y > y - 35 && ghost.y < y + 5) {
            ghost.y = y - 35;

            if (player.playerX > ghost.x) {
              ghost.x += 5;
              ghost.moveUp = false;
              ghost.moveDown = false;
              ghost.moveRight = true;
              ghost.moveLeft = false;
            } else {
              ghost.x -= 5;
              ghost.moveUp = false;
              ghost.moveDown = false;
              ghost.moveRight = false;
              ghost.moveLeft = true;
            }
          }
        }
      });
    });
    /* }); */
  },

  choseMove: () => {
    //is an array with x:s and y:s showing the shortest path
    let desitionForAxis = ghostAi.checkSizeOnXandY();

    for (let i = 0; i < desitionForAxis.length; i++) {
      let ghost = createGhosts.myGhostArray[i];
      let axisToMoveOn = desitionForAxis[i];
      let onPath = ghostAi.checkIfGhostIsOnAPath(ghost.x, ghost.y);
      //insert a if statement here with collosion controll
      ghostAi.collosionControll(axisToMoveOn);

      if (onPath == true) {
        if (axisToMoveOn == "x") {
          if (player.playerX > ghost.x - 12) {
            ghost.moveRight = true;
            ghost.moveLeft = false;
            ghost.moveUp = false;
            ghost.moveDown = false;
          } else {
            ghost.moveLeft = true;
            ghost.moveRight = false;
            ghost.moveUp = false;
            ghost.moveDown = false;
          }
        } else if (axisToMoveOn == "y") {
          if (player.playerY < ghost.y + 12) {
            ghost.moveLeft = false;
            ghost.moveRight = false;
            ghost.moveUp = true;
            ghost.moveDown = false;
          } else {
            ghost.moveLeft = false;
            ghost.moveRight = false;
            ghost.moveUp = false;
            ghost.moveDown = true;
          }
        }
      }
      ghost.moveGhost();
    }
  }
};
