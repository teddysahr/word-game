const chosenWordDisplay = document.getElementById("objective-words");
const startButton = document.getElementById("start-button");

const wordList = [
  ["ROBOT", "WINCE"],
  ["POWER", "GUILD"],
];

function runGame() {
  chosenWordDisplay.textContent = getWords();
}

function getWords() {
  return wordList[0];
}

startButton.addEventListener("click", runGame);
