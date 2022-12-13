const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const container = document.querySelector('#container');
const userScoreDisplay = document.querySelector('#score1');
const computerScoreDisplay = document.querySelector('#score2');

let userScore = 0;
let computerScore = 0;
container.textContent = 'Make your move'
userScoreDisplay.textContent = `Your score: ${userScore}`;
computerScoreDisplay.textContent = `Computer score: ${computerScore}`;


rock.addEventListener('click', () => {
  play('Rock');
});

paper.addEventListener('click', () => {
  play('Paper');
});

scissors.addEventListener('click', () => {
  play('Scissors');
});

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return 'Rock';
  } else if (computerChoice === 1) {
    return 'Paper'; 
  } else {
    return 'Scissors';
  }
}


function play(userChoice) {
  let computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    container.textContent = "It's a draw.";
  } else if (userChoice === 'Rock' && computerChoice === 'Paper') {
    container.textContent = "You lose! Paper beats Rock.";
    computerScore++;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
  } else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
    container.textContent = "You win! Rock beats Scissors";
    userScore++;
    userScoreDisplay.textContent = `Your score: ${userScore}`;
  } else if (userChoice === 'Paper' && computerChoice === 'Rock') {
    container.textContent = "You win! Paper beats Rock";
    userScore++;
    userScoreDisplay.textContent = `Your score: ${userScore}`;
  } else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
    container.textContent = "You lose! Scissors beats Paper.";
    computerScore++;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
  } else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
    container.textContent = "You lose! Rock beats Scissors";
    computerScore++;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
  } else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
    container.textContent = "You win! Scissors beats Paper";
    userScore++;
    userScoreDisplay.textContent = `Your score: ${userScore}`;
  } else {
    console.log("Something went wrong.");
  }
  if (userScore === 5) {
    container.textContent = 'You won the game!';
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.textContent = `Your score: ${userScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
    return;
  } else if (computerScore === 5) {
    container.textContent = 'Computer won the game!';
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.textContent = `Your score: ${userScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
    return;
  }
}