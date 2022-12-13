const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

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

  if (userChoice === 'Rock' && computerChoice === 'Rock') {
    return "It's a draw.";
  } else if (userChoice === 'Rock' && computerChoice === 'Paper') {
    return "You lose! Paper beats Rock.";
  } else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
    return "You win! Rock beats Scissors.";
  } else if (userChoice === 'Paper' && computerChoice === 'Rock') {
    return "You win! Paper beats Rock.";
  } else if (userChoice === 'Paper' && computerChoice === 'Paper') {
    return "It's a draw.";
  } else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
    return "You lose! Scissors beat Paper.";
  } else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
    return "You lose! Rock beats Scissors.";
  } else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
    return "You win! Scissors beat Paper.";
  } else if (userChoice === 'Scissors' && computerChoice === 'Scissors') {
    return "It's a draw.";
  } else {
    return "Something went wrong.";
  }
}