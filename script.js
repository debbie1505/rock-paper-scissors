// Get the computer's choice
function getComputerChoice() {
  // Generate a random number between 0 and 2
  let randomNumber = Math.floor(Math.random() * 3);

  // Assign 'Rock', 'Paper', or 'Scissors' based on the random number
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
  // For ties
  if (playerSelection === computerSelection) {
    return "tie";
  }

  // Determine the winner
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

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// The UI
// Add event listeners to the buttons
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultsDiv = document.getElementById("results");

// Function to play the game when a button is clicked
function playGame(playerSelection) {
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);

  // Display the results in the resultsDiv
  resultsDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore} | Result: ${result}`;

  // Update scores
  if (result === "player") {
    playerScore++;
  } else if (result === "computer") {
    computerScore++;
  }

  // Check if one player reached 5 points and announce the winner
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      resultsDiv.textContent += "\nYou win the game!";
    } else {
      resultsDiv.textContent += "\nComputer wins the game!";
    }

    // Reset scores after the game ends
    playerScore = 0;
    computerScore = 0;
  }
}
// Set up event listeners once when the page loads
rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));
