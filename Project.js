const p1 = {
  score: 0,
  button: document.querySelector("#button1"),
  display: document.querySelector("#display1"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#button2"),
  display: document.querySelector("#display2"),
};
const resetButton = document.querySelector("#reset");
const selectButton = document.querySelector("#playTo");
let winningScore = 5;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score = player.score + 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.display.textContent = player.score;
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});

selectButton.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);
function reset() {
  isGameOver = false;
  for (p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
  // p1.score = 0;
  //p2.score = 0;
  //p1.display.textContent = 0;
  //p2.display.textContent = 0;
  //p1.display.classList.remove("has-text-success", "has-text-danger");
  //p2.display.classList.remove("has-text-success", "has-text-danger");
  //p1.button.disabled = false;
  //p2.button .disabled = false;
}
