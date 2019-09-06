let map = {
  drawMap: function() {
    /* constructor(x, y, width, height) */

    //read the squares from left to right on the map.
    let AllSquares = [
      new SquareClass(50, 50, 50, 50),
      new SquareClass(150, 50, 50, 50),
      new SquareClass(250, 0, 50, 100),
      new SquareClass(350, 50, 50, 50),
      new SquareClass(450, 50, 50, 50),
      new SquareClass(50, 150, 50, 250),
      new SquareClass(150, 150, 250, 50),
      new SquareClass(450, 150, 50, 250),
      new SquareClass(150, 250, 100, 50),
      new SquareClass(300, 250, 100, 50),
      new SquareClass(150, 350, 250, 50),
      new SquareClass(50, 450, 50, 50),
      new SquareClass(150, 450, 50, 50),
      new SquareClass(250, 450, 50, 100),
      new SquareClass(350, 450, 50, 50),
      new SquareClass(450, 450, 50, 50)
    ];

    AllSquares.forEach(square => {
      square.drawRect();
    });
  }
};
