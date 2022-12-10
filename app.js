//TODO: 
// functionality for rock paper scissors pictures on selection of button

//TODO: ADDED FUNCTIONALITY - completed
// restart game button
//player has to restart the game after 5 rounds

let computerScore = 0;
let playerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const restartButton = document.querySelector('.restart');
const outcomeDiv = document.querySelector('.outcome');
const stopGameDiv = document.querySelector('.stopGame');

const rockImage = document.getElementById('#rockImg')
document.getElementById('rockImg').style.display = "none";
const paperImage = document.getElementById('#paperImg')
document.getElementById('paperImg').style.display = "none";
const scissorsImage = document.getElementById('#scissorsImg')
document.getElementById('scissorsImg').style.display = "none";


const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

const p = document.createElement('p');
const h2 = document.createElement('h2');



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

//stop the game after 5 rounds functionality
const stopGame = (playerScore, computerScore) => {
    if(playerScore === 5 || computerScore === 5) {
        const h2 = document.createElement('h2')
        h2.innerText = `you have played 5 rounds, restart the game`
        stopGameDiv.appendChild(h2)
        document.querySelector('.rock').disabled = true;
        document.querySelector('.paper').disabled = true;
        document.querySelector('.scissors').disabled = true;
    }

}

//update the scores on screen
const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score:   ${playerScore}`
    computerScoreSpan.innerText = `Computer Score:   ${computerScore}`
}

//restart game function
function reloadGame() {
    location.reload(); //reloads the page
}



 //rock button functionality
rockButton.addEventListener('click', function() {
    const computerSelection = getComputerChoice(0, 2)
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
    stopGame(playerScore, computerScore)
    document.getElementById('rockImg').style.display = "block";
    document.getElementById('paperImg').style.display = "none";
    document.getElementById('scissorsImg').style.display = "none";
});

 //paper button functionality
 paperButton.addEventListener('click', function() {
    const computerSelection = getComputerChoice(0, 2)
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
    stopGame(playerScore, computerScore)
    document.getElementById('paperImg').style.display = "block";
    document.getElementById('rockImg').style.display = "none";
    document.getElementById('scissorsImg').style.display = "none";

 });

 //scissors button functionality
 scissorsButton.addEventListener('click', function() {
   
    const computerSelection = getComputerChoice(0, 2)
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
    stopGame(playerScore, computerScore)
    document.getElementById('scissorsImg').style.display = "block";
    document.getElementById('rockImg').style.display = "none";
    document.getElementById('paperImg').style.display = "none";
});

//restart game functionality
restartButton.addEventListener('click', function() {
    reloadGame();
});