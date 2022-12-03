

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
const computerSelection = getComputerChoice(0, 2)
console.log (computerSelection);

const playerSelection = prompt("You start the game, pick 'Rock, Paper or Scissors'").toLowerCase();
if (playerSelection !== 'rock' &&
     playerSelection !== 'paper' && 
     playerSelection !== 'scissors') {
    const invalidChoice = prompt("Invalid Choice - You start the game, pick 'Rock, Paper or Scissors'").toLowerCase();
}
