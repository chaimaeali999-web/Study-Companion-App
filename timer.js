const WORK_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

let time = WORK_TIME;
let isWork = true;
let timer = null;

const display = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  display.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (timer) return;

  timer = setInterval(() => {
    time--;
    updateDisplay();

    if (time < 0) {
      clearInterval(timer);
      timer = null;

      isWork = !isWork;
      time = isWork ? WORK_TIME : BREAK_TIME;
      updateDisplay();

      startTimer();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  pauseTimer();
  isWork = true;
  time = WORK_TIME;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
