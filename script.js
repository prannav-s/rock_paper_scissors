function playGame() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Make your move! Rock, paper, or scissors?").trim().toLowerCase();
        while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            alert("Invalid choice! Rock, paper, or scissors?");
            playerSelection = prompt("Make your move! Rock, paper, or scissors?").trim().toLowerCase();
        }
        let result = playRound(playerSelection, computerSelection);
        if (result === 1) {
            userScore++;
        }
        else if (result === -1) {
            computerScore++;
        }
        else {
            continue;
        }
    }
    const scoreMsg = " You scored " + userScore + "-" + computerScore + " against the computer.";
    if (userScore > computerScore) {
        alert("You won!" + scoreMsg);
    }
    else if (userScore < computerScore) {
        alert("You lost" + scoreMsg);
    }
    else {
        alert("Tie!" + scoreMsg);
    }
    
}
function playRound(playerSelection, computerSelection) {
    let scoreMsg = " You chose " + playerSelection + " and the computer chose " + computerSelection + ".";
    if (playerSelection == computerSelection) {
        alert("Tie!" + scoreMsg);
        return 0;
    }
    else if (
        (computerSelection == "paper" && playerSelection == "rock") || 
        (computerSelection == "rock" && playerSelection == "scissors") || 
        (computerSelection == "scissors" && playerSelection == "paper")) {
        alert("You lost!" + scoreMsg);
        return -1;
    }

    else {
        alert("You win!" + scoreMsg);;
        return 1;
    }
}

function getComputerChoice() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    switch (getRandomInt(1, 4)) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

playGame();
