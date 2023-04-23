var gameLevel = 1;
var timeout = 500;
var click = 0;
function movement() {
  document.getElementById("Button").style.marginTop = Math.random() * 400 + "px";
  document.getElementById("Button").style.marginLeft = Math.random() * 400 + "px";
}
function levelUp() {
  click++;
  if (click === 3) {
    alert("You are the winner! You can go next Level " + gameLevel + "!");
    gameLevel++;
    timeout -= 100;
    click = 0;
    if (gameLevel > 6) {
      alert("Congratulations, you won the game!");
    } else {
      setTimeout(function () {
        movement();
      }, timeout);
    }
  }
}