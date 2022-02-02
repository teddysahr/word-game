const chosenWordDisplay = document.getElementById("objective-words");
const startButton = document.getElementById("start-button");
const inputButton = document.getElementById("input-button");
const inputText = document.getElementById("input-text");
const inputWords = document.getElementById("input-words");

const wordList = [
  ["ROBOT", "WINCE"],
  ["POWER", "GUILD"],
];

function runGame() {
  chosenWordDisplay.textContent = getWords();

  //start timer
}

let currentWord = wordList[0][0];

function addWord() {
  let count = 0;

  const compareWordObj = {};

  const currentWordArray = currentWord.split("");

  for (letter of currentWordArray) {
    compareWordObj[letter] = true;
  }

  const potentialWordArray = inputText.value.split("");

  for (letter of potentialWordArray) {
    if (letter in compareWordObj) {
      count++;
    }
  }

  if (count >= 2) {
    const newWord = document.createElement("li");
    newWord.textContent = inputText.value;
    inputWords.appendChild(newWord);
    currentWord = inputText.value;
    count = 0;
  } else {
    alert(
      "words needs to contain at least two letters from the previous words!"
    );
    count = 0;
  }

  console.log(compareWordObj);

  //   const enteredWord = inputText.textContent;

  console.log(inputText.value);
}

function getWords() {
  return wordList[0];
}

startButton.addEventListener("click", runGame);
inputButton.addEventListener("click", addWord);
