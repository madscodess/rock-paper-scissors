

function getComputerChoice(min, max) { // min and max included 
        const randomChoice = Math.floor(Math.random() * (max - min + 1) + min)
switch(randomChoice) {
    case 0:
        return 'rock';
    case 1:
        return 'paper';
    case 2:
        return 'scissors';
};
} 

function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
      return `It's a tie! you both picked ${playerSelection}`;
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You win! Rock beats Scissors";
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win! Paper beats Rock";
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return "You win! Scissors beats Paper";
   } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
   }
}

const computerSelection = getComputerChoice(0, 2)
console.log (computerSelection);
const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
if (playerSelection !== 'rock' &&
     playerSelection !== 'paper' && 
     playerSelection !== 'scissors') {
     const invalidChoice = alert("Invalid Choice")
     }

console.log(playRound(playerSelection, computerSelection))
     
