class Ghost {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveRight = false;
  moveLeft = false;
  moveUp = false;
  moveDown = false;

  moveGhost() {
    if (this.moveRight == true) {
      this.x += 5;
    } else if (this.moveLeft == true) {
      this.x -= 5;
    } else if (this.moveUp == true) {
      this.y -= 5;
    } else if (this.moveDown == true) {
      this.y += 5;
    }
  }

  drawGhost() {
    let canvas = document.getElementById("pacman");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, 25, 25);
  }
}
