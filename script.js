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
  let playerSelection = prompt("Choose one: Rock, Paper, or Scissors");
  playerSelection = playerSelection.toLowerCase();
  //For ties
  if (playerSelection === computerSelection) {
    return "It's a tie! Play again";
  }

  //Determine the winner
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "player";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (PlayerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "computer";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    playRound();
    if (playRound() === "player") {
      playerScore++;
    } else if (playRound() === "computer") {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log("You win!");
  } else if (playerScore < computerScore) {
    console.log("You lost!");
  } else {
    console.log("Tie!");
  }
}

game();
