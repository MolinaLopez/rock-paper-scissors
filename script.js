const userChoice = 'Rock';
const computerChoice = 'Rock';

function getUserChoice() {
  let userChoice = prompt('R for Rock\nP for Paper\nS for Scissors');
  userChoice = userChoice.toLowerCase()
  if (userChoice === 'r' || userChoice === 'rock') {
    return 'Rock';
  } else if (userChoice === 'p' || userChoice === 'paper') {
    return 'Paper';
  } else if (userChoice === 's' || userChoice === 'scissors') {
    return 'Scissors';
  } else {
    return 'Invalid';
  }
}

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

function playRound(userChoice, computerChoice) {
  userChoice = getUserChoice();
  computerChoice = getComputerChoice();

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
  } else if (userChoice === 'Invalid') {
    return "You didn't enter a valid letter.";
  } else {
    return "Something went wrong.";
  }
}

function game() {
  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let result = playRound();
    console.log(result);
    let score = result.charAt(4);   
    
    if (score === 'w') {
      userScore++;
    } else if (score === 'l') {
      computerScore++;
    }
    console.log(`Your score is ${userScore}. The computer's score is ${computerScore}.`);
  }

  if (userScore < computerScore) {
    console.log(`Game over! Computer won by ${computerScore} to ${userScore}.`);
  } else if (userScore > computerScore) {
    console.log(`Congratulations! You beat the computer by ${userScore} to ${computerScore}.`);
  } else {
    console.log(`Game finished as a draw. The final score is ${userScore} to ${computerScore}.`);
  }
}

game()