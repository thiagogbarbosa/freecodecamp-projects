
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    console.log(randomIndex);
    return options[randomIndex];
  };

  
  function hasPlayerWonTheRound(player,computer) {
      return (
          (player === "Rock" && computer === "Scissors") ||
          (player === "Scissors" && computer === "Paper") ||
          (player === "Paper" && computer === "Rock")
        );
    };
    
let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption){
    const computerResult = getRandomComputerResult();

    if(hasPlayerWonTheRound(userOption,computerResult)){
        playerScore++;
        return "Player wins! " + userOption + " beats " + computerResult;
    } else if(userOption===computerResult){
        return "It's a tie! Both chose " + userOption;
    } else {
        computerScore++;
        return "Computer wins! " + computerResult + " beats " + userOption;
    };
};

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    //roundResultsMsg should be updated with the result of the round
    roundResultsMsg.innerText = getRoundResults(userOption);
    //playerScoreSpanElement and computerScoreSpanElement should be updated to show the scores
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;

    //Check if player or Computer reached three points
    //If there is a winner show the resetGame Button

    if(computerScore===3){
        winnerMsgElement.innerText = "Computer has won the game!";
        optionsContainer.style.display="none";
        resetGameBtn.style.display="block";
    } else if(playerScore===3){
        winnerMsgElement.innerText = "Player has won the game!";
        optionsContainer.style.display="none";
        resetGameBtn.style.display="block";
    };
};

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    winnerMsgElement.innerText ="";
    roundResultsMsg.innerText ="";
    optionsContainer.style.display = "block";
    resetGameBtn.style.display = "none";
};

resetGameBtn.addEventListener("click",resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
    showResults("Rock");
});

paperBtn.addEventListener("click", function(){
    showResults("Paper");
});

scissorsBtn.addEventListener("click", function(){
    showResults("Scissors");
})