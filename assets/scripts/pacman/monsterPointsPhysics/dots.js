let dots = {
  drawDots: function() {
    let allDots = [];

    //from left lane one vertical
    for (let i = 25; i < 550; i += 25) {
      allDots.push(new Dots(25, i));
    }
    //from left lane two vertical
    for (let i = 50; i < 550; i += 25) {
      allDots.push(new Dots(125, i));
    }

    for (let i = 50; i < 125; i += 25) {
      allDots.push(new Dots(i, 125));
    }

    for (let i = 150; i < 525; i += 25) {
      allDots.push(new Dots(i, 125));
    }

    for (let i = 50; i < 125; i += 25) {
      allDots.push(new Dots(i, 25));
    }

    for (let i = 50; i < 250; i += 25) {
      allDots.push(new Dots(i, 25));
    }

    for (let i = 150; i < 450; i += 25) {
      allDots.push(new Dots(i, 225));
    }

    for (let i = 150; i < 450; i += 25) {
      allDots.push(new Dots(i, 325));
    }

    for (let i = 150; i < 525; i += 25) {
      allDots.push(new Dots(i, 425));
    }

    for (let i = 50; i < 125; i += 25) {
      allDots.push(new Dots(i, 525));
    }

    for (let i = 150; i < 250; i += 25) {
      allDots.push(new Dots(i, 525));
    }

    for (let i = 325; i < 525; i += 25) {
      allDots.push(new Dots(i, 525));
    }

    for (let i = 50; i < 125; i += 25) {
      allDots.push(new Dots(i, 425));
    }

    for (let i = 325; i < 525; i += 25) {
      allDots.push(new Dots(i, 25));
    }

    for (let i = 25; i < 550; i += 25) {
      allDots.push(new Dots(525, i));
    }

    for (let i = 50; i < 125; i += 25) {
      allDots.push(new Dots(225, i));
    }

    for (let i = 50; i < 125; i += 25) {
      allDots.push(new Dots(325, i));
    }

    for (let i = 50; i < 125; i += 25) {
      allDots.push(new Dots(425, i));
    }

    for (let i = 150; i < 250; i += 25) {
      allDots.push(new Dots(425, i));
    }

    for (let i = 250; i < 350; i += 25) {
      allDots.push(new Dots(425, i));
    }

    for (let i = 350; i < 450; i += 25) {
      allDots.push(new Dots(425, i));
    }

    for (let i = 450; i < 550; i += 25) {
      allDots.push(new Dots(425, i));
    }

    for (let i = 450; i < 550; i += 25) {
      allDots.push(new Dots(325, i));
    }

    for (let i = 450; i < 550; i += 25) {
      allDots.push(new Dots(225, i));
    }

    for (let i = 225; i < 325; i += 25) {
      allDots.push(new Dots(275, i));
    }

    allDots.forEach(dots => {
      dots.drawDot();
    });
  }
};