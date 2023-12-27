//Get the computer's choice
function getComputerChoice() {
  //Generate a random number between 0 an 2
  let randomNumber = Math.floor(Math.random() * 3);

  //Assign 'Rock', 'Paper', or 'Scissors' based on the random number

  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}
