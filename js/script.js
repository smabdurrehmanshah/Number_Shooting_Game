const containerNumbers = 70;
const containerEle = document.querySelector('.container');
const timerValueEle = document.querySelector('.timerValue');
const scoreValueEle = document.querySelector('.scoreValue');
const targetValueEle = document.querySelector('.targetValue');
const btnEle = document.querySelector('.btn');

resetGame();

function generateNumbers() {
  containerEle.innerHTML = '';

  for(let i=0; i<containerNumbers; i++) {
    const divEle = document.createElement('div');
    divEle.className = 'circle';
    divEle.innerText = Math.ceil(Math.random()*10);

    containerEle.append(divEle);
  }
}

function startTimer() {
  let timerValue = 59;
  timerValueEle.innerText = timerValue;

  const intervalId = setInterval(() => {
    timerValueEle.innerText = --timerValue;

    if(timerValue <= 0) {
      containerEle.innerHTML = `<div class="gameOverContainer">
                                  <div class="gameOver">Game Over</div>
                                  <div class="finalScore">Your Score: ${scoreValueEle.innerText}</div>
                                  <button onclick='resetGame()' class="btn">Restart Game</button>
                                </div>`;
      clearInterval(intervalId);
    }
  }, 1000);
}

function generateTarget() {
  const target = Math.ceil(Math.random()*10);
  targetValueEle.innerText = target;
}

containerEle.addEventListener('click', (event) => {
  if(event.target.className === 'circle') {
    
    if(event.target.innerText == targetValueEle.innerText)
      scoreValueEle.innerText = Number(scoreValueEle.innerText) + Number(event.target.innerText);

    generateTarget();
  }
})

function resetGame() {
    generateNumbers();
    startTimer();
    generateTarget();
    scoreValueEle.innerText = 0;
}

