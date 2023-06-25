const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const colorBody = document.querySelector('body');
btnStart.addEventListener('click', startChange);
let timerChange = null;
function startChange() {
  btnStart.disabled = true;
  timerChange = setInterval(() => {
    colorBody.style.background = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStop.addEventListener('click', () => {
  clearInterval(timerChange);
  btnStart.disabled = false;
  btnStop.disabled = true;
});
