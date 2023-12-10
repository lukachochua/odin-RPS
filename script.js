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


let getUserChoice = () => {
    let userInput = prompt("Please enter Rock, Paper, or Scissors:");
    
    if (userInput.trim() === "") {
        alert("No input detected. Please try again.");
        return getUserChoice(); 
    }

    let inputOptions = ['Rock', 'Paper', 'Scissors'];
    let correctInput = userInput[0].toUpperCase() + userInput.slice(1).toLocaleLowerCase();


    if (!inputOptions.includes(correctInput)) {
        alert("Invalid Input. Try Rock, Paper or Scissors.");
        return getUserChoice();
    }
    return correctInput;
}


let game = () => {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = getUserChoice();
        let computerSelection = getComputerChoice();

        let result = getWinner(playerSelection, computerSelection);
        
        console.log(result);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }

        if (playerScore === 3 || computerScore === 3) {
            break;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie");
    }
}


game();


