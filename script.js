const balloonContainer = document.getElementById("balloon-container");
const mainBalloon = document.getElementById("main-balloon");
const title = document.querySelector(".title");

var clickCount = 1;

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = 0;
  var g = 37;
  var b = 170;
  var mt = random(10);
  var ml = random(2);
  var dur = random(3) + 10;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}vh 0 0 ${ml}vh;
  animation: float ${dur}s ease-in infinite
  `;
}

function mainBalloonOnClick() {
  const balloonSizeWidth = 10 + 0.4 * clickCount;
  const balloonSizeHeigh = 11.5 + 0.4 * clickCount;
  const fontSize = 3 + 0.2 * clickCount;

  if (clickCount === 30) {
    mainBalloon.style.color = "rgb(45, 45, 45)";
    mainBalloon.textContent = "과연?";
    mainBalloon.style.opacity = 0;
    title.style.display = "none";
    createBalloons(30);
    mainBalloon.style.pointerEvents = "none";
  } else {
    mainBalloon.style.width = balloonSizeWidth + "vh";
    mainBalloon.style.height = balloonSizeHeigh + "vh";
    clickCount += 1;

    var texts = ["아들?", "딸?"];
    mainBalloon.textContent = texts[clickCount % 2];
    if (clickCount % 2 === 0) mainBalloon.style.color = "rgb(51, 93, 245)";
    else mainBalloon.style.color = "rgb(255, 91, 91)";

    // Increase the font size
    mainBalloon.style.fontSize = fontSize + "vh";
    // Decrement the opacity
    var currentOpacity = parseFloat(
      window.getComputedStyle(mainBalloon).opacity
    );
    mainBalloon.style.opacity = (currentOpacity - 0.02).toFixed(1);
  }
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove();
  }, 500);
}

mainBalloon.addEventListener("click", () => {
  console.log("done");
  mainBalloonOnClick();
});

// window.addEventListener("click", () => {
//   removeBalloons();
// });
