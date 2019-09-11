let createGhosts = {
  myGhostArray: [
    new Ghost(15, 15),
    new Ghost(515, 15),
    new Ghost(15, 515),
    new Ghost(515, 515)
  ],

  drawAllGhost: () => {
    createGhosts.myGhostArray.forEach(ghost => {
      ghost.drawGhost();
    });
  }
};
