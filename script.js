let playerScore = 0;
let computerScore = 0;

let gameActive = true;

let getComputerChoice = () => {
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

let getUserChoice = (userInput) => {
    let correctInput = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
    return correctInput;
}

let game = (userChoice) => {

    if (!gameActive) {
        return;
    }


    let computerSelection = getComputerChoice();

    showImage(computerSelection);

    let result = getWinner(userChoice, computerSelection);

    gameplay.textContent = result;

    let h1 = document.querySelector('h1');

    h1.textContent = `Computer Chose ${computerSelection}!`;
    h1.style.visibility = 'visible';



    if (result.includes("Win")) {
        playerScore++;
    } else if (result.includes("Lose")) {
        computerScore++;
    }

    displayScore.textContent = `PLAYER ${playerScore}-${computerScore} COMPUTER`;


    if (playerScore >= 5 || computerScore >= 5) {
        endGame();
    }


}


let getWinner = (playerSelection, computerSelection) => {
    if (computerSelection === playerSelection) {
        return "It's a tie!";
    } else if (
        (computerSelection === "Rock" && playerSelection === "Paper") ||
        (computerSelection === "Paper" && playerSelection === "Scissors") ||
        (computerSelection === "Scissors" && playerSelection === "Rock")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const buttonClick = (e) => {
    const choice = e.target.classList[1];
    const userChoice = getUserChoice(choice);
    game(userChoice);
}

const endGame = () => {
    gameActive = false;
    if (playerScore > computerScore) {
        displayResult.textContent = "Congrats! You win the game!";
    } else if (playerScore < computerScore) {
        displayResult.textContent = "Sorry, you lose. Try again!";
    }

    restart();

    playerScore = 0;
    computerScore = 0;
}

const restartGame = document.querySelector('.restart');

const restart = () => {
    restartGame.style.visibility = 'visible';

    restartGame.addEventListener('click', () => {
        restartGame.style.visibility = 'hidden';
        displayResult.textContent = 'Play Rock, Paper, Scissors!';
        displayScore.textContent = 'PLAYER 0-0 COMPUTER';
        gameActive = true;
    });
}

const playerButtons = document.querySelectorAll(".player");

playerButtons.forEach(button => {
    button.addEventListener("click", buttonClick);
});

const displayScore = document.querySelector('.score');
const displayResult = document.querySelector('.result');
const gameplay = document.querySelector('.game');


const showImage = (computerSelection) => {
    let computerChoice = document.querySelector('.computer-choice');


    if (computerSelection === 'Rock') {
        computerChoice.src = "rock.png";
    } else if (computerSelection === 'Paper') {
        computerChoice.src = "paper.png";
    } else if (computerSelection === 'Scissors') {
        computerChoice.src = "scissors.png";
    }

    document.querySelector('.images').style.visibility = 'visible';
}

