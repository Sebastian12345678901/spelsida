class SquareClass {
  canvas = document.getElementById("pacman");
  ctx = canvas.getContext("2d");
  radius = 15;
  constructor(x, y, width, height, color, lineWeight) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.lineWeight = lineWeight;
  }

  drawRect() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y + this.radius);
    this.ctx.lineTo(this.x, this.y + this.height - this.radius);
    this.ctx.arcTo(
      this.x,
      this.y + this.height,
      this.x + this.radius,
      this.y + this.height,
      this.radius
    );
    this.ctx.lineTo(this.x + this.width - this.radius, this.y + this.height);
    this.ctx.arcTo(
      this.x + this.width,
      this.y + this.height,
      this.x + this.width,
      this.y + this.height - this.radius,
      this.radius
    );
    this.ctx.lineTo(this.x + this.width, this.y + this.radius);
    this.ctx.arcTo(
      this.x + this.width,
      this.y,
      this.x + this.width - this.radius,
      this.y,
      this.radius
    );
    this.ctx.lineTo(this.x + this.radius, this.y);
    this.ctx.arcTo(this.x, this.y, this.x, this.y + this.radius, this.radius);

    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = this.lineWeight;
    this.ctx.stroke();
  }
}
