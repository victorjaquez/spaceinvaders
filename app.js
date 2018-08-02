let hero = {
  top: 700,
  left: 550
};

let missiles = [];

let enemies = [
  { left: 200, top: 100 },
  { left: 300, top: 100 },
  { left: 400, top: 100 },
  { left: 500, top: 100 },
  { left: 600, top: 100 },
  { left: 700, top: 100 },
  { left: 800, top: 100 },
  { left: 900, top: 100 },
  { left: 200, top: 175 },
  { left: 300, top: 175 },
  { left: 400, top: 175 },
  { left: 500, top: 175 },
  { left: 600, top: 175 },
  { left: 700, top: 175 },
  { left: 800, top: 175 },
  { left: 900, top: 175 }
];

document.onkeydown = function(e) {
  if (e.keyCode === 37) {
    hero.left = hero.left - 10;
    moveHero();
  } else if (e.keyCode === 39) {
    hero.left = hero.left + 10;
    moveHero();
  } else if (e.keyCode === 32) {
    missiles.push({
      left: hero.left + 15,
      top: hero.top
    });
    drawMissiles();
  }
};

const moveHero = () => {
  document.getElementById("hero").style.left = hero.left + "px";
};

const drawMissiles = () => {
  document.getElementById("missiles").innerHTML = "";
  for (let missile = 0; missile < missiles.length; missile = missile + 1) {
    document.getElementById(
      "missiles"
    ).innerHTML += `<div class='missile' style='left:${
      missiles[missile].left
    }px; top:${missiles[missile].top}px;'></div>`;
  }
};

const moveMissiles = () => {
  for (let missile = 0; missile < missiles.length; missile = missile + 1) {
    missiles[missile].top = missiles[missile].top - 5;
  }
};

const drawEnemies = () => {
  document.getElementById("enemies").innerHTML = "";
  for (let enemy = 0; enemy < enemies.length; enemy = enemy + 1) {
    document.getElementById(
      "enemies"
    ).innerHTML += `<div class='enemy' style='left:${
      enemies[enemy].left
    }px; top:${enemies[enemy].top}px;'></div>`;
  }
};

const moveEnemies = () => {
  for (let enemy = 0; enemy < enemies.length; enemy = enemy + 1) {
    enemies[enemy].top = enemies[enemy].top + 3;
  }
};

const collisionDetection = () => {
  for (let enemy = 0; enemy < enemies.length; enemy = enemy + 1) {
    for (let missile = 0; missile < missiles.length; missile = missile + 1) {
      if (
        missiles[missile].top <= enemies[enemy].top + 50 &&
        missiles[missile].top >= enemies[enemy].top &&
        missiles[missile].left >= enemies[enemy].left &&
        missiles[missile].left <= enemies[enemy].left + 50
      ) {
        enemies.splice(enemy, 1);
        missiles.splice(missile, 1);
      }
    }
  }
};

const win = () => {
  if (enemies.length === 0) {
    alert("All enemies destroyed!");
  }
};

const gameLoop = () => {
  setTimeout(gameLoop, 90);
  moveMissiles();
  drawMissiles();
  moveEnemies();
  drawEnemies();
  collisionDetection();
  win();
};

gameLoop();
