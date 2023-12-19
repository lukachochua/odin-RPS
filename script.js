let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
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

let getUserChoice = (userInput) => {
    let correctInput = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
    return correctInput;
}

let game = (userChoice) => {
    let computerSelection = getComputerChoice();

    let result = getWinner(userChoice, computerSelection);

    gameplay.textContent = result;

    if (result.includes("Win")) {
        playerScore++;
    } else if (result.includes("Lose")) {
        computerScore++;
    }

    displayScore.textContent = `${playerScore}-${computerScore}`;


    if (playerScore >= 5 || computerScore >= 5) {
        endGame();
    }
}

const buttonClick = (e) => {
    const choice = e.target.classList[1]; 
    const userChoice = getUserChoice(choice);
    game(userChoice);
}

const endGame = () => {
    if (playerScore > computerScore) {
        displayResult.textContent = "Cograts! You win the game!";
    } else if (playerScore < computerScore) {
        displayResult.textContent = "Sorry, you lose. Try again!";
    } 

    playerScore = 0;
    computerScore = 0;
}

const playerButtons = document.querySelectorAll(".player");

playerButtons.forEach(button => {
    button.addEventListener("click", buttonClick);
});

const displayScore = document.querySelector('.score'); 

const displayResult = document.querySelector('.result');

const gameplay = document.querySelector('.game');

