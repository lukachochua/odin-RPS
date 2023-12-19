let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

let getWinner = (playerSelection, computerSelection) => {
    if (computerSelection === playerSelection) {
        return "It's a tie! Try again";
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

    console.log(result);

    if (result.includes("Win")) {
        playerScore++;
    } else if (result.includes("Lose")) {
        computerScore++;
    }

    if (playerScore >= 3 || computerScore >= 3) {
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
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie");
    }

    playerScore = 0;
    computerScore = 0;
}

const playerButtons = document.querySelectorAll(".player");

playerButtons.forEach(button => {
    button.addEventListener("click", buttonClick);
});