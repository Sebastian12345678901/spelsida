let timeBonus = {
  bonus: 120,
  counter: () => {
    timeBonus.bonus--;

    document.querySelector("#scoreboard").innerHTML = `
    <p>score: ${dots.score}</p>
    <p>timeBonus:${timeBonus.bonus}</p>
    
    `;
  }
};
