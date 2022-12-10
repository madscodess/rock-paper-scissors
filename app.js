let computerScore = 0;
let playerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');

const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

const p = document.createElement('p');

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
    p.innerText = `You tied! you both picked ${playerSelection}`
    outcomeDiv.appendChild(p)
} 
   else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++
    p.innerText = "You win this round! Rock beats Scissors";
    outcomeDiv.appendChild(p)
} 
   else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
    p.innerText = "You win this round! Paper beats Rock";
    outcomeDiv.appendChild(p)
} 
   else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
    p.innerText = "You win this round! Scissors beats Paper"; 
    outcomeDiv.appendChild(p)
} 
   else {
    computerScore++
    p.innerText = `You lose this round! ${computerSelection} beats ${playerSelection}`;
    outcomeDiv.appendChild(p)
}
}
//check for who is the winner
const checkForWinner = (playerScore, computerScore) => {
    if(playerScore === 5){
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${computerScore}, great job!`
        outcomeDiv.appendChild(h2)
    } else if (computerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('computer-won')
        h2.innerText = `You lost ${playerScore} to ${computerScore}, try again!`
        outcomeDiv.appendChild(h2)
    }

}

//update the scores on screen
const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score:   ${playerScore}`
    computerScoreSpan.innerText = `Computer Score:   ${computerScore}`

 //rock button functionality
rockButton.addEventListener('click', function() {
    const computerSelection = getComputerChoice(0, 2)
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
});

 //paper button functionality
 paperButton.addEventListener('click', function() {
    const computerSelection = getComputerChoice(0, 2)
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
 });

 //scissors button functionality
 scissorsButton.addEventListener('click', function() {
    const computerSelection = getComputerChoice(0, 2)
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
});

// function game(){
    //play 5 rounds of the game 
    // for (let i = 0; i < 5; i++) {
    //  const computerSelection = getComputerChoice(0, 2)
    //  const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
    //     if (playerSelection !== 'rock' &&
    //             playerSelection !== 'paper' && 
    //             playerSelection !== 'scissors') 
    //             {
    //                 const invalidChoice = alert("Invalid Choice");
    //                 playerScore = 0;
    //                 computerScore = 0;
    //                 console.log(game())
    //          }
    //          console.log (computerSelection);
    //          console.log(playRound(playerSelection, computerSelection));
    //         }

    //          if (playerScore > computerScore) {
    //             console.log(playerScore);
    //             console.log(computerScore);
    //             return "you beat the computer on this game"
                
    //         }
    //         else if (playerScore < computerScore) {
    //            å console.log(playerScore);
    //             console.log(computerScore);
    //             return "computer won this game, you gotta get better!"
                
    //         }
    //         else { 
    //             console.log(playerScore);
    //             console.log(computerScore);
    //             return "you tied with the computer"
    //         }

    // }

// console.log(game())