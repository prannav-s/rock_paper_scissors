function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let playerSelection = null;
    const buttons = document.querySelectorAll("button");
    const header = document.querySelector(".header");
    const intro = document.createElement("h4");
    intro.textContent = "Make your move! Rock, paper, or scissors?";
    const compImg = document.getElementById("comp-img");
    const userImg = document.getElementById("user-img");

    header.appendChild(intro);
    const score = document.querySelector("#score");
    const message = document.querySelector("#message");
    
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            intro.textContent = "Make your move! Rock, paper, or scissors?";
            let computerSelection = getComputerChoice();
            playerSelection = button.id

            compImg.src = "./assets/" + computerSelection + ".webp";
            userImg.src = "./assets/" + playerSelection + ".webp";

            console.log(playerSelection)
            if (button.id === 'finish') {
                endGame(userScore, computerScore);

                userScore = 0
                computerScore = 0
            }
            else {
                let result = playRound(playerSelection, computerSelection, message)
                console.log(button.id)
                if (result === 1) {
                    userScore++;
                }
                else if (result === -1) {
                    computerScore++;
                }
            }

            score.textContent ="Record: "+ userScore + "-" + computerScore;

        });
    });

function endGame(userScore, computerScore) {
    userImg.src = "./assets/question.png"
    compImg.src = "./assets/question.png"
    const scoreMsg = " You scored " + userScore + "-" + computerScore + " against the computer.";
    if (userScore > computerScore) {
        message.textContent = "You won!" + scoreMsg;
    }
    else if (userScore < computerScore) {
        message.textContent = "You lost" + scoreMsg;
    }
    else {
        message.textContent = "Tie!" + scoreMsg;
    }


    intro.textContent = "Make a move to restart the game!"
}
    
}
function playRound(playerSelection, computerSelection, message) {
    let scoreMsg = " You chose " + playerSelection + " and the computer chose " + computerSelection + ".";
    if (playerSelection == computerSelection) {
        message.textContent = "Tie!" + scoreMsg;
        return 0;
    }
    else if (
        (computerSelection == "paper" && playerSelection == "rock") || 
        (computerSelection == "rock" && playerSelection == "scissors") || 
        (computerSelection == "scissors" && playerSelection == "paper")) {
        message.textContent ="You lost!" + scoreMsg;
        return -1;
    }

    else {
        message.textContent = "You win!" + scoreMsg;
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
