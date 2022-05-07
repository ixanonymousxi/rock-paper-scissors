
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const results = document.querySelector("#results");
const score = document.querySelector("#score");
const gameOverMsg = document.querySelector("#gameOver");


/*
//Asks player for their option. If they give an invalid option, asks user again.
function askPlayer(whenCalled){
    let playerChoice;

    if (whenCalled === "first"){
        playerChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();
    }else{
        playerChoice = prompt("Oops, that's not a valid option! Please choose rock, paper, or scissors.").toLowerCase();
    }

    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        return playerChoice;
    }else{
        return askPlayer("second");
    }

}
*/

//Computer randomly chooses rock, paper, or scissors.
function computerPlay(){
    const choices = ['rock', 'paper', 'scissors'];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

//Plays a round and returns a string declaring a winner.
function playRound(){
    gameOverMsg.textContent = "";
    const playerSelection = this.getAttribute('id');
    const computerSelection = computerPlay();

    if(playerSelection === computerSelection){
        //return "draw";
        results.textContent = "It's a draw";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
              (playerSelection === "scissors" && computerSelection === "paper") ||
              (playerSelection === "paper" && computerSelection === "rock")){
        playerScore++;
        //return `You win! ${playerSelection} beats ${computerSelection}.`;
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
    }
    else{
        computerScore++;
        //return `You lose! ${computerSelection} beats ${playerSelection}.`;
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
    }

    if(playerScore === 5 || computerScore === 5){
        const winMsg = "Congrats you win!";
        const loseMsg = "Bummer. You lose.";

        score.textContent = `Player: ${playerScore}  Computer: ${computerScore}`;
        gameOverMsg.textContent = playerScore === 5 ? winMsg : loseMsg;
        playerScore = 0;
        computerScore = 0;
    }
    
}

/*
//Plays 5 rounds,keeps score, and determines winner at the end.
function game(){
    for(i = 0; i < 5; i++){
        console.log(playRound(askPlayer("first"),computerPlay()));
    }

    if(playerScore === computerScore){
        console.log("It's a draw.");
        //results.textContent = "It's a draw";
    }
    else if (playerScore > computerScore){
        console.log(`Your score is ${playerScore} out of 5. You win!`);
        //results.textContent = `Your score is ${playerScore} out of 5. You win!`;
    }else{
        console.log(`Your score is ${playerScore} out of 5. You lose!`);
        //results.textContent = `Your score is ${playerScore} out of 5. You lose!`;
    }
}

game();
*/


rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);