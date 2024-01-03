let timer;
let isRunning = false;
let isFocus = true;
let time = 25 * 60;

function startFocusTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
    document.getElementById("focus-text").style.display = "block";
  }
}
function startBreakTimer()
{
  isFocus = false;
  time = 5 * 60;
  timer = setInterval(updateTimer,1000);
  document.getElementById("relax-text").style.display = "block";
  startTimer();
}

function updateTimer() {
  const timerDisplay = document.getElementById('time');
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? `0${seconds}` : seconds;

  timerDisplay.innerText = `${minutes}:${seconds}`;

  if (time > 0) {
    time--;
  } else {
    clearInterval(timer);
    isRunning = false;
    if (isFocusTime) {
      alert('Pomodoro session finished!');
      startBreakTimer();
    } else {
      alert('Break session finished!');
      resetTimer();
    }
    alert('Pomodoro session finished!');
    
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  time = 25 * 60;
  document.getElementById('time').innerText = '25:00';
  document.getElementById('focus-text').style.display = "none";
  document.getElementById('relax-text').style.display = "none";
}
