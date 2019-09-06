let controlls = {
  startControlls: function() {
    let rightPressed = false;
    let leftPressed = false;
    let upPressed = false;
    let downPressed = false;

    document.addEventListener(
      "keydown",
      event => {
        event.preventDefault();
        //sets direction to true
        if (event.keyCode == 39) {
          rightPressed = true;
        } else if (event.keyCode == 37) {
          leftPressed = true;
        }
        if (event.keyCode == 40) {
          downPressed = true;
        } else if (event.keyCode == 38) {
          upPressed = true;
        }
        //moves player
        if (rightPressed) {
          player.moveRight();
        } else if (leftPressed) {
          player.moveLeft();
        }
        if (downPressed) {
          player.moveDown();
        } else if (upPressed) {
          player.moveUp();
        }
      },
      false
    );

    //sets pressed to false while not pushed

    document.addEventListener(
      "keyup",
      event => {
        if (event.keyCode == 39) {
          rightPressed = false;
        } else if (event.keyCode == 37) {
          leftPressed = false;
        }
        if (event.keyCode == 40) {
          downPressed = false;
        } else if (event.keyCode == 38) {
          upPressed = false;
        }
      },
      false
    );
  }
};
