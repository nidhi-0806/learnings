//First interactive game 
let playGame = confirm("Do you want to play a game?");
if (playGame) {
//play
    let playerChoice = prompt("Please entre rock, paper or scissors");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || 
            playerOne === "paper" || 
            playerOne === "scissors"
        ) {
            let computerChoice = Math.floor(Math.random() * 3+1);
            let computer = computerChoice === 1 
            ? "rock" 
            : computerChoice === 2 
            ? "paper" 
            : "scissors";
            console.log("computer:${computer}");
            let result = 
            playerOne === computer ? "It's a tie"
            : playerOne === "rock" && computer === "paper"
            ? 'playerOne: ${playerOne} \n computer: ${computer} \n computer wins!'
            : playerOne === "paper" && computer === 'scissors'
            ? 'playerOne: ${playerOne} \n computer: ${computer} \n computer wins!'
            : playerOne === 'scissors' && computer === 'rock'
            ? 'playerOne: ${playerOne} \n computer: ${computer} \n computer wins!'
            : 'playerOne: ${playerOne} \n computer: ${computer} \n playerOne wins!'
            alert(result);

            let playAgain = confirm("Play again?");
            playAgain ? location.reload() : alert("goodbye!");  
            }
        else {"You have to enter rock, paper or scissors"
            }
        }
    else {
      alert("I guess you changed your mind, Goodbye!");
        }    
    }     
else { 
    alert("No problem, Goodbye!");
}
