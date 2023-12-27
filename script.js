//Get the computer's choice
function getComputerChoice() {
  //Generate a random number between 0 an 2
  let randomNumber = Math.floor(Math.random() * 3);

  //Assign 'Rock', 'Paper', or 'Scissors' based on the random number

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

let computerChoice = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  let computerSelection = computerChoice;
  playerSelection = playerSelection.toLowerCase();
  //For ties
  if (playerSelection === computerSelection) {
    return "It's a tie! Play again";
  }

  //Determine the winner
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper";
  } else if (PlayerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors";
  }
}
