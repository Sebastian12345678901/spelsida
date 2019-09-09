class Dots {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  drawDot() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, 5, 5);
  }
}
