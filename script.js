'use strict';
//textContent is used to get text in html element.
//DOM:Structure Representaion of HTML Documents.
//Allows Javascript to access HTML Element and styles to manuplate them
//console.log(document.querySelector('.between').textContent);

//DoM IS PART OF web API
//document.querySelector('.message').textContent = 'correct Number';
//document.querySelector('.guess').value;

//Event Listners
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(msg) {
  document.querySelector('.message').textContent = msg;
}
function update(score, number, bodyColor, width, value) {
  //document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = number;
  document.querySelector('body').style.backgroundColor = bodyColor;
  document.querySelector('.number').style.width = width;
  document.querySelector('.guess').value = value;
}

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start Guessing...');
  update(20, '?', '#222', '15rem', ' ');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No Numnber 😐 ');
  }
  // when player wins
  if (guess === secretNumber) {
    displayMessage('Correct Number🎉 🎆 ');
    update(++score, secretNumber, '#60b347', '30rem');
    highScore = highScore < score ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;
  } else if (score > 1) {
    document.querySelector('.score').textContent = --score;

    //Guess is to High or Low
    displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low');
  } else {
    // document.querySelector('.message').textContent = 'You Lost the Game';
    displayMessage('You Lost the Game');
    document.querySelector('.score').textContent = 0;
    score = 20;
  }
});
