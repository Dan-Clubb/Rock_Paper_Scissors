let playerScore = 0;
let computerScore = 0;
let resultMessage = document.querySelector('#result-txt');
let playerScoreDisplay = document.querySelector('.player-score');
let computerScoreDisplay = document.querySelector('.computer-score');
let choice = document.querySelector('.choice'); 
let playerRock = document.querySelector('#p-rock');
let playerPaper = document.querySelector('#p-paper');
let playerScissors = document.querySelector('#p-scissors');
let computerRock = document.querySelector('#c-rock');
let computerPaper = document.querySelector('#c-paper');
let computerScissors = document.querySelector('#c-scissors');
let userImage = document.querySelector('.user-image');
let computerImage = document.querySelector('.computer-image');
let gameOverScreen = document.querySelector(".game-over");

function playAgain(){
    document.location.reload();
}


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
        resultMessage.textContent = `It's a draw! You both chose ${computerSelection}`;

        switch (playerSelection){
            case 'rock':
                playerRock.setAttribute('style', 'background: darkgrey;');
                computerRock.setAttribute('style', 'background: darkgrey;');
                playerScissors.setAttribute('style', 'background: whitesmoke;');
                playerPaper.setAttribute('style', 'background: whitesmoke;');
                computerPaper.setAttribute('style', 'background: whitesmoke;');
                computerScissors.setAttribute('style', 'background: whitesmoke;');
                break;
            case 'paper':
                playerPaper.setAttribute('style', 'background: darkgrey;');
                computerPaper.setAttribute('style', 'background: darkgrey;');
                playerScissors.setAttribute('style', 'background: whitesmoke;');
                playerRock.setAttribute('style', 'background: whitesmoke;');
                computerRock.setAttribute('style', 'background: whitesmoke;');
                computerScissors.setAttribute('style', 'background: whitesmoke;');
                break;
            case 'scissors':
                playerScissors.setAttribute('style', 'background: darkgrey;');
                computerScissors.setAttribute('style', 'background: darkgrey;');
                playerRock.setAttribute('style', 'background: whitesmoke;');
                playerPaper.setAttribute('style', 'background: whitesmoke;');
                computerPaper.setAttribute('style', 'background: whitesmoke;');
                computerRock.setAttribute('style', 'background: whitesmoke;');
                break;
        }

    }    
    else if (
            (playerSelection == 'scissors' && computerSelection == 'paper') || 
            (playerSelection == 'paper' && computerSelection == 'rock') || 
            (playerSelection == 'rock' && computerSelection == 'scissors')
            ){
        playerScore++
        playerScoreDisplay.textContent = playerScore;
        resultMessage.textContent = `You win! You chose ${playerSelection} and the computer chose ${computerSelection}`;

        switch (playerSelection){
            case 'rock':
                playerRock.setAttribute('style', 'background: lightgreen;');
                computerScissors.setAttribute('style', 'background: #fc5868;');
                computerRock.setAttribute('style', 'background: whitesmoke;');
                playerPaper.setAttribute('style', 'background: whitesmoke;');                
                playerScissors.setAttribute('style', 'background: whitesmoke;');
                computerPaper.setAttribute('style', 'background: whitesmoke;');
                break;
            case 'paper':
                playerPaper.setAttribute('style', 'background: lightgreen;');
                computerRock.setAttribute('style', 'background: #fc5868;');
                computerPaper.setAttribute('style', 'background: whitesmoke;');
                playerRock.setAttribute('style', 'background: whitesmoke;');
                playerScissors.setAttribute('style', 'background: whitesmoke;');        
                computerScissors.setAttribute('style', 'background: whitesmoke;');
                break;
            case 'scissors':
                playerScissors.setAttribute('style', 'background: lightgreen;');
                computerPaper.setAttribute('style', 'background: #fc5868;');
                computerScissors.setAttribute('style', 'background: whitesmoke;');
                playerPaper.setAttribute('style', 'background: whitesmoke;');
                playerRock.setAttribute('style', 'background: whitesmoke;');             
                computerRock.setAttribute('style', 'background: whitesmoke;');
                break;
        }
        
    }
    else{
        computerScore++
        computerScoreDisplay.textContent = computerScore;
        resultMessage.textContent = `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}`;

        switch (computerSelection){
            case 'rock':
                computerRock.setAttribute('style', 'background: lightgreen;');
                playerScissors.setAttribute('style', 'background: #fc5868;');
                playerPaper.setAttribute('style', 'background: whitesmoke;');
                playerRock.setAttribute('style', 'background: whitesmoke;');                
                computerPaper.setAttribute('style', 'background: whitesmoke;');
                computerScissors.setAttribute('style', 'background: whitesmoke;');
                break;
            case 'paper':
                computerPaper.setAttribute('style', 'background: lightgreen;');
                playerRock.setAttribute('style', 'background: #fc5868;');
                playerScissors.setAttribute('style', 'background: whitesmoke;');
                playerPaper.setAttribute('style', 'background: whitesmoke;');
                computerRock.setAttribute('style', 'background: whitesmoke;');
                computerScissors.setAttribute('style', 'background: whitesmoke;');
                break;
            case 'scissors':
                computerScissors.setAttribute('style', 'background: lightgreen;');
                playerPaper.setAttribute('style', 'background: #fc5868;');
                playerScissors.setAttribute('style', 'background: whitesmoke;');
                playerRock.setAttribute('style', 'background: whitesmoke;');                
                computerPaper.setAttribute('style', 'background: whitesmoke;');
                computerRock.setAttribute('style', 'background: whitesmoke;');
                break;
        }
    }
}

function gameResult(){
    let gameResultText = document.querySelector("#game-result-txt");

    if (playerScore == 5){
        let disappear = document.querySelector(".disappear");
        disappear.setAttribute('style', 'display: none;');
        gameOverScreen.setAttribute('id', 'game-over-screen');
        gameResultText.textContent = `You win! ${playerScore} : ${computerScore}`;  
        gameOverScreen.insertBefore(userImage, gameResultText);    
    }

    if (computerScore == 5){
        let disappear = document.querySelector(".disappear");
        disappear.setAttribute('style', 'display: none;');
        gameOverScreen.setAttribute('id', 'game-over-screen');
        gameResultText.textContent = `Computer wins:(   ${computerScore} : ${playerScore}`;  
        gameOverScreen.insertBefore(computerImage, gameResultText);
    }
}

playerRock.addEventListener('click', () => {
    playRound('rock', computerPlay());
    gameResult();
})

playerPaper.addEventListener('click', () => {
    playRound('paper', computerPlay());
    gameResult();
})

playerScissors.addEventListener('click', () => {
    playRound('scissors', computerPlay());
    gameResult();
})
 
