const chosenWordDisplay = document.getElementById("objective-words");
const startButton = document.getElementById("start-button");
const startWindow = document.getElementById("start");
const inputButton = document.getElementById("input-button");
const inputWords = document.getElementById("input-words");
const word = document.getElementById("word");
const inputText = document.getElementById("input-text");
const wordBox = document.getElementById("word-box");
const gameWindow = document.getElementById("game");

const wordList = [
  ["robot", "wince"],
  ["power", "guild"],
];

function runGame() {
  startWindow.remove();

  gameWindow.style.removeProperty("display");

  const gameWords = getWords();

  chosenWordDisplay.textContent = `${gameWords[0]} >>> ${gameWords[1]}`;

  currentWord = gameWords[0];

  console.log(currentWord);

  //start timer
}

let currentWord;

function addWord() {
  let count = 0;

  const addWordArray = inputText.value.split("");

  const currentWordArray = currentWord.split("");

  const compareWordObj = {};

  console.log(currentWordArray);

  for (letter of currentWordArray) {
    compareWordObj[letter] = true;
  }

  for (letter of addWordArray) {
    if (letter in compareWordObj) {
      count++;
    }
  }

  if (count >= 3) {
    const newWordDiv = document.createElement("div");
    newWordDiv.classList.add("typed-words");
    wordBox.appendChild(newWordDiv);
    for (let i = 0; i < addWordArray.length; i++) {
      const newLetter = document.createElement("div");
      newLetter.textContent = addWordArray[i];
      newWordDiv.appendChild(newLetter);
    }
    currentWord = addWordArray.join("");
    count = 0;
    word.innerHTML = "";
    inputText.value = "";
  } else {
    alert(
      "words needs to contain at least two letters from the previous words!"
    );
    count = 0;
  }

  console.log(compareWordObj);
}

function getWords() {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function displayLetter() {
  word.innerHTML = "";
  const inputArray = inputText.value.split("");
  for (let i = 0; i < inputArray.length; i++) {
    const newLetter = document.createElement("div");
    newLetter.textContent = inputArray[i];
    word.appendChild(newLetter);
  }
}

startButton.addEventListener("click", runGame);

inputButton.addEventListener("click", addWord);

inputText.addEventListener("keyup", displayLetter);

inputText.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    inputButton.click();
  }
});
