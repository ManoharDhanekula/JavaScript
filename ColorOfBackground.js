let msgInterval;
let colors = ["red", "purple", "green", "yellow"];
let i = 0;
function update(colors, i) {
  document.body.style.background = `${colors[i]}`;
}
function slide() {
  update(colors, i);
  msgInterval = setInterval(function () {
    if (i > colors.length) {
      i = 0;
    }
    console.log(i);
    update(colors, i);
    i++;
  }, 1000);
}

function stop() {
  i = 0;
  clearInterval(msgInterval);
}

function start() {
  stop();
  slide();
}

function pause() {
  clearInterval(msgInterval);
}
