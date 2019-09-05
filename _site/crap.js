function randomName() {
  let firstPartOfName = [
    "Mega",
    "Don",
    "Mc",
    "Crap",
    "Super",
    "Shark",
    "Scrotum",
    "Fork"
  ];
  let secondPartOfName = [
    "Man",
    " Horse",
    "Lotus",
    "Saber",
    "Tooth",
    "Apple",
    "Mongol",
    "Irish"
  ];

  let name = firstPartOfName[Math.floor(Math.random() * 8)];
  name += secondPartOfName[Math.floor(Math.random() * 8)];
  return "- name: " + name + "\n";
}

function randomScore() {
  return "  score: " + Math.floor(Math.random() * 500000) + "\n";
}

function randomDate() {
  let year = 2000 + Math.ceil(Math.random() * 19);
  let month = Math.ceil(Math.random() * 19);
  let day = Math.ceil(Math.random() * 30);

  return "  date: " + year + "-" + month + "-" + day + "\n";
}

function randomHigscore() {
  let randomHigscore = "";

  for (let i = 0; i < 100; i++) {
    randomHigscore += randomName();
    randomHigscore += randomScore();
    randomHigscore += randomDate();
  }

  return randomHigscore;
}

console.log(randomHigscore());
