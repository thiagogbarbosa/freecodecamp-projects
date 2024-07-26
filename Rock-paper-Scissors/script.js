function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    console.log(randomIndex);
    return options[randomIndex];
  }
  console.log(getRandomComputerResult());