let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    
   let randomNumber = Math.floor(Math.random()*3) + 1;

   switch (randomNumber){
       case 1:
           return 'rock';
           break;
       case 2:
           return 'paper';
           break;
       case 3:
           return 'scissors';
           break;
   }
}

function playRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection){
        return `It's a draw! You both chose ${computerSelection}`
    }    
    else if (
            (playerSelection == 'scissors' && computerSelection == 'paper') || 
            (playerSelection == 'paper' && computerSelection == 'rock') || 
            (playerSelection == 'rock' && computerSelection == 'scissors')
            ){
        playerScore++
        return `You win! You chose ${playerSelection} and the computer chose ${computerSelection}`
    }
    else{
        computerScore++
        return `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}`
    }
}

function game(){

    while (
          (playerScore < 5) &&
          (computerScore < 5)
    ){
        let computerSelection = computerPlay();
        let playerSelection = prompt('chose rock, paper or scissors')
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore == 5) return `You win! ${playerScore} to ${computerScore}`
    if (computerScore == 5) return `You lose :( ${computerScore} to ${playerScore}`
}

console.log(game())
