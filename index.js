const chosenWordDisplay = document.getElementById("objective-words");
const startButton = document.getElementById("start-button");
const inputButton = document.getElementById("input-button");
const inputWords = document.getElementById("input-words");
const wordBox = document.getElementById("word-box");

const wordList = [
  ["ROBOT", "WINCE"],
  ["POWER", "GUILD"],
];

function runGame() {
  chosenWordDisplay.textContent = getWords();

  //start timer
}

let currentWord = wordList[1][0];

function addWord() {
  let count = 0;

  const currentWordArray = currentWord.split("");

  const compareWordObj = {};

  console.log(wordArray);

  for (letter of currentWordArray) {
    compareWordObj[letter] = true;
  }

  for (letter of wordArray) {
    if (letter in compareWordObj) {
      count++;
    }
  }

  if (count >= 3) {
    const newWord = document.createElement("li");
    newWord.textContent = wordArray.join("");
    inputWords.appendChild(newWord);
    currentWord = wordArray.join("");
    count = 0;
    wordArray.splice(0, wordArray.length);
    word.innerHTML = "";
  } else {
    alert(
      "words needs to contain at least two letters from the previous words!"
    );
    count = 0;
  }

  console.log(compareWordObj);
}

function getWords() {
  return wordList[1];
}

const wordArray = [];

function typeWord(e) {
  const key = e.key;

  console.log(key.toString());

  const keyString = key.toString();

  const keyStringUpperCase = keyString.toUpperCase();

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  for (letter of alphabet) {
    if (keyStringUpperCase === letter && wordArray.length < 5) {
      wordArray.push(keyStringUpperCase);
      const newLetter = document.createElement("div");
      newLetter.textContent = keyStringUpperCase;
      word.appendChild(newLetter);
    }
  }

  if (key === "Backspace") {
    wordArray.pop();
    word.removeChild(word.lastElementChild);
  }

  if (key === "Enter") {
    addWord();
  }

  wordBox.textContent = wordArray.join("");
}

startButton.addEventListener("click", runGame);

inputButton.addEventListener("click", addWord);

document.addEventListener("keydown", typeWord);
