let computerScore = 0;
let playerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const restartButton = document.querySelector('.restart');

const gameUpdateDiv = document.querySelector('.gameUpdate');
const outcomeDiv = document.querySelector('.outcome');
const stopGameDiv = document.querySelector('.stopGame');

const rockImage = document.getElementById('#rockImg')
const paperImage = document.getElementById('#paperImg')
const scissorsImage = document.getElementById('#scissorsImg')



const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');
const updatePlay = document.createElement('p');
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
    updatePlay.innerText = `Player: ${playerSelection}, Computer: ${computerSelection}`
    p.innerText = `You win this round! Rock beats Scissors`;
    gameUpdateDiv.appendChild(updatePlay) //update updatePlay text
    outcomeDiv.appendChild(p) //update p text
} 
   else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
    updatePlay.innerText = `Player: ${playerSelection}, Computer: ${computerSelection}`
    p.innerText = `You win this round! Paper beats Rock`;
    gameUpdateDiv.appendChild(updatePlay) //update updatePlay text
    outcomeDiv.appendChild(p) //update p text
} 
   else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
    updatePlay.innerText = `Player: ${playerSelection}, Computer: ${computerSelection}`
    p.innerText = `You win this round! Scissors beats Paper`; 
    gameUpdateDiv.appendChild(updatePlay) //update updatePlay text
    outcomeDiv.appendChild(p) //update p text
} 
   else {
    computerScore++
    updatePlay.innerText = `Player: ${playerSelection}, Computer: ${computerSelection}`
    p.innerText = `You lose this round! ${computerSelection} beats ${playerSelection}`;
    gameUpdateDiv.appendChild(updatePlay) //update updatePlay text
    outcomeDiv.appendChild(p) //update p text
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
    //display only rock image when clicked
    document.getElementById('rockImg').style.display = "flex";
    document.getElementById('paperImg').style.display = "none";
    document.getElementById('scissorsImg').style.display = "none";
    //change color of buttons
    rockButton.style.backgroundColor = 'salmon';
    paperButton.style.backgroundColor = 'whitesmoke';
    scissorsButton.style.backgroundColor = 'whitesmoke';
});

 //paper button functionality
 paperButton.addEventListener('click', function() {
    const computerSelection = getComputerChoice(0, 2)
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
    stopGame(playerScore, computerScore)
    //display only paper image when clicked
    document.getElementById('paperImg').style.display = "flex";
    document.getElementById('rockImg').style.display = "none";
    document.getElementById('scissorsImg').style.display = "none";
    paperButton.style.backgroundColor = 'salmon';
    //change color of buttons
    paperButton.style.backgroundColor = 'salmon';
    rockButton.style.backgroundColor = 'whitesmoke';
    scissorsButton.style.backgroundColor = 'whitesmoke';

 });

 //scissors button functionality
 scissorsButton.addEventListener('click', function() {
    const computerSelection = getComputerChoice(0, 2)
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
    stopGame(playerScore, computerScore)
    //display only scissors image when clicked
    document.getElementById('scissorsImg').style.display = "flex";
    document.getElementById('rockImg').style.display = "none";
    document.getElementById('paperImg').style.display = "none";
     //change color of buttons
     scissorsButton.style.backgroundColor = 'salmon';
     paperButton.style.backgroundColor = 'whitesmoke';
     rockButton.style.backgroundColor = 'whitesmoke';
});

//restart game functionality
restartButton.addEventListener('click', function() {
    reloadGame();
});