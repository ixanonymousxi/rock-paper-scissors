
let playerOption = askPlayer("first");
let playerScore = 0;
let computerScore = 0;


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
        askPlayer("second");
    }

}

//Computer randomly chooses rock, paper, or scissors.
function computerPlay(){
    const choices = ['rock', 'paper', 'scissors'];
    const randNum = Math.floor(Math.random() * 3));
    return choices[randNum];
}

//Plays a round and returns a string declaring a winner.
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "draw";
    }
    else if ((playerSelection === "rock" && computerSelectioon === "scissors") ||
              (playerSelection === "scissors" && computerSelectioon === "paper") ||
              (playerSelection === "paper" && computerSelectioon === "rock")){
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else{
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

//Plays 5 rounds,keeps score, and determines winner at the end.
function game(){
    for(i = 0; i < 5; i++){
        console.log(playRound(playerOption,computerPlay()));
    }

    if(playerScore === computerScore){
        console.log("It's a draw.");
    }
    else if (playerScore > computerScore){
        console.log(`You win! Your score is ${playerScore} out of 5.`);
    }else{
        console.log(`You lose! Your score is ${playerScore} out of 5.`);
    }
}