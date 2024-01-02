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

function playRound(playerSelection, computerSelection) {
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
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "computer";
  }
}

/*Play the game five times and determine the winner
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    let userChoice = prompt("Choose one: Rock, Paper, or Scissors");
    let playerSelection = userChoice.toLowerCase();
    let result = playRound(playerSelection, computerSelection);

    if (result === "player") {
      playerScore++;
    } else if (result === "computer") {
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
*/

//Call the game function outside of the loop
game();

//The UI
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let computerSelection = getComputerChoice();

rock.addEventListener("click", playround("rock", computerSelection));
paper.addEventListener("click", playround("paper", computerSelection));
scissors.addEventListener("click", playround("scissors", computerSelection));
