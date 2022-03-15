let playerScore = 0;
let computerScore = 0;
let playerSelection = ("rock, paper, or scissors?");
const computerSelection = computerPlay()

// Function that randomly returns rock, paper, or scissors

function computerPlay()
{
    let random = Math.random();
    if (random < 0.34) {
        return "rock";
    } else if (random <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function that plays a 5 round game of Rock Paper Scissors

function game() {
    
       for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("rock, paper, or scissors?");
        let computerSelection = computerPlay();
           let result = playRound(playerSelection, computerSelection);
            if (result == "You win! Rock beats scissor." || "You win! Paper beats rock." || "You win! Scissor beats paper.") {
                playerScore++;
                console.log("Player wins this round!")
           } else if (result == "You lose! Scissor beats paper." || "You lose! Paper beats rock." || "You lose! Rock beats scissor.") {
               computerScore++;
               console.log("Computer wins this round!")
           }
        }
        if (playerScore > computerScore) {
           return "You win the game!";
       } else if (playerScore < computerScore) {
          return "You lose the game!";
        } else {
            return "It's a tie!";
       }
    }

// Function that plays a single round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
         return "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissor.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissor beats paper.";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win! Paper beats rock.";
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        return "You lose! Rock beats scissor.";
    } else {
        return "You win! Scissor beats paper.";
        }
     }
