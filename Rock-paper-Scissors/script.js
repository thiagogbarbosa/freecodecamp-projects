
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
        return "Player wins! ", userOption,"beats", computerResult;
    } else if(userOption===computerResult){
        return "It's a tie! Both chose", userOption;
    } else {
        computerScore++;
        return "Computer wins! ", computerResult,"beats", userOption;
    };
};

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultMsg = document.getElementById("results-msg");

function showResults(userOption) {
    //roundResultsMsg should be updated with the result of the round
    roundResultMsg.innerText = getRoundResults(userOption);
    //playerScoreSpanElement and computerScoreSpanElement should be updated to show the scores
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
};

showResults("Rock");