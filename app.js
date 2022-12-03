
let playerScore = 0; 
let computerScore = 0;
let gameOver = false;


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
    console.log(playerScore);
    console.log(computerScore);
      return `It's a tie! you both picked ${playerSelection}`;
   } 
   else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++
    console.log(playerScore);
    console.log(computerScore);
      return "You win this round! Rock beats Scissors";
   } 
   else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
    console.log(playerScore);
    console.log(computerScore);
      return "You win this round! Paper beats Rock";
   } 
   else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++
      console.log(playerScore);
      console.log(computerScore);
      return "You win this round! Scissors beats Paper"; 
   } 
   else {
    computerScore++
    console.log(playerScore);
    console.log(computerScore);
      return `You lose this round! ${computerSelection} beats ${playerSelection}`;
   }
}



function game(){
    //play 5 rounds of the game 
    for (let i = 0; i < 5; i++) {
     const computerSelection = getComputerChoice(0, 2)
     const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
        if (playerSelection !== 'rock' &&
                playerSelection !== 'paper' && 
                playerSelection !== 'scissors') {
                    const invalidChoice = alert("Invalid Choice");
             }
             console.log (computerSelection);
             console.log(playRound(playerSelection, computerSelection));
            }

             if (playerScore > computerScore) {
                console.log(playerScore);
                console.log(computerScore);
                return "you beat the computer on this game"
                
            }
            else if (playerScore < computerScore) {
                console.log(playerScore);
                console.log(computerScore);
                return "computer won this game, you gotta get better!"
                
            }
            else { 
                console.log(playerScore);
                console.log(computerScore);
                return "you tied with the computer"
            }
    }

console.log(game())







     
