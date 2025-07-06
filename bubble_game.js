let score = 0;
let timer = 60;
let hitNumber = 0;
let timeInterval;
function increaseScore() {
  score += 10;
  document.getElementById("score").textContent = score;
}
function setNewHit() {
  hitNumber = Math.floor(Math.random() * 10);
  document.getElementById("hit").textContent = hitNumber;
}
function makeBubble() {
  let clutter = "";
  for (let i = 0; i < 60; i++) {
    let num = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${num}</div>`;
  }
  document.getElementById("bubble-container").innerHTML = clutter;
}
function runTimer() {
  timeInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.getElementById("timer").textContent = timer;
    } else {
      clearInterval(timeInterval);
      document.getElementById("bubble-container").innerHTML = "<h2>Game Over! 🎯</h2>";
      document.getElementById("restart-btn").style.display = "inline-block";
    }
  }, 1000);
}
document.getElementById("bubble-container").addEventListener("click", function(e) {
  if (e.target.classList.contains("bubble")) {
    let clickedNum = Number(e.target.textContent);
    if (clickedNum === hitNumber) {
      increaseScore();
      setNewHit();
      makeBubble();
    }
  }
});
document.getElementById("restart-btn").addEventListener("click", () => {
  // Reset values
  score = 0;
  timer = 60;
  document.getElementById("score").textContent = score;
  document.getElementById("timer").textContent = timer;
  document.getElementById("restart-btn").style.display = "none";

  setNewHit();
  makeBubble();
  runTimer();
});
setNewHit();
makeBubble();
runTimer();
