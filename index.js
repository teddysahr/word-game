const chosenWordDisplay = document.getElementById("objective-words");
const startButton = document.getElementById("start-button");
const startWindow = document.getElementById("start");
const inputButton = document.getElementById("input-button");
const inputWords = document.getElementById("input-words");
const word = document.getElementById("word");
const inputText = document.getElementById("input-text");
const wordBox = document.getElementById("word-box");
const gameWindow = document.getElementById("game");
const targetWord = document.getElementById("target-word");

const wordList = [
  ["robot", "wince"],
  ["power", "guild"],
  ["smack", "blimp"],
];

let gameWords;

function runGame() {
  startWindow.remove();

  gameWindow.style.removeProperty("display");

  inputText.focus();

  gameWords = getWords();

  chosenWordDisplay.textContent = `${gameWords[0]} >>> ${gameWords[1]}`;

  currentWord = gameWords[0];

  const firstWordDiv = document.createElement("div");
  firstWordDiv.classList.add("correct-letter");
  firstWordDiv.classList.add("typed-words");
  firstWordDiv.id = "object-word";
  firstWordDiv.textContent = gameWords[0];
  wordBox.appendChild(firstWordDiv);

  const lastWordDiv = document.createElement("div");

  lastWordDiv.classList.add("typed-words");
  lastWordDiv.textContent = gameWords[1];
  targetWord.appendChild(lastWordDiv);

  console.log(currentWord);

  //start timer
}

function checkWin(arr) {
  let finalCount = 0;

  const gameWordArray = gameWords[1].split("");

  const compareWordObj = {};

  for (letter of gameWordArray) {
    compareWordObj[letter] = true;
  }

  for (letter of arr) {
    if (letter in compareWordObj) {
      finalCount++;
    }
  }

  if (finalCount >= 3) {
    return true;
  } else {
    return false;
  }
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
    document.getElementById("object-word").id = "past-word";
    const newWordDiv = document.createElement("div");
    newWordDiv.classList.add("typed-words");
    newWordDiv.classList.add("correct-letter");
    newWordDiv.textContent = inputText.value;
    newWordDiv.id = "object-word";
    wordBox.appendChild(newWordDiv);
    // for (let i = 0; i < addWordArray.length; i++) {
    //   if (addWordArray[i] in compareWordObj) {
    //     const newLetter = document.createElement("div");
    //     newLetter.textContent = addWordArray[i];
    //     newLetter.classList.add("correct-letter");
    //     newWordDiv.appendChild(newLetter);
    //   } else {
    //     const newLetter = document.createElement("div");
    //     newLetter.textContent = addWordArray[i];
    //     newWordDiv.appendChild(newLetter);
    //   }
    // }
    currentWord = addWordArray.join("");
    count = 0;
    word.innerHTML = "";
    inputText.value = "";
    if (checkWin(addWordArray)) {
      console.log("You won");
    } else {
      console.log("not yet");
    }
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
  const currentWordArray = currentWord.split("");

  const compareWordObj = {};

  console.log(currentWordArray);

  for (letter of currentWordArray) {
    compareWordObj[letter] = true;
  }
  word.innerHTML = "";
  const inputArray = inputText.value.split("");
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] in compareWordObj) {
      const newLetter = document.createElement("div");
      newLetter.textContent = inputArray[i];
      newLetter.classList.add("correct-letter");
      word.appendChild(newLetter);
    } else {
      const newLetter = document.createElement("div");
      newLetter.textContent = inputArray[i];
      word.appendChild(newLetter);
    }
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
