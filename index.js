const playerOneName = document.getElementById("player-1");
const currentScoreOne = document.getElementById("player-one-score");
const mainScoreOne = document.getElementById("player-one-main-score");
var playerOneCurrentScrore = 0, playerOneMainScrore = 0;


const playerTwoName = document.getElementById("player-2");
const currentScoreTwo = document.getElementById("player-two-score");
const mainScoreTwo = document.getElementById("player-two-main-score");
var playerTwoCurrentScrore = 0, playerTwoMainScrore = 0;



const newGameBtn = document.getElementById("new-game-btn");
const diceImage = document.getElementById("dice-img");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const holdBtn = document.getElementById("hold-btn");

const dotOne = document.getElementById("current-dot-1");
const dotTwo = document.getElementById("current-dot-2");


const playerOneWin = document.querySelector(".left-container > .winner");
const playerTwoWin = document.querySelector(".right-container > .winner");

dotOne.style.display = "block";
dotTwo.style.display = "none";

  let randomNumber;

const rollDice = () => {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  
  if (randomNumber === 1) {
    diceImage.style.visibility = "visible";
    diceImage.src = "https://i.imgur.com/m9mb3cx.png";
  } else if (randomNumber === 2) {
    diceImage.style.visibility = "visible";
    diceImage.src = "https://i.imgur.com/EA2qvGZ.png";
  } else if (randomNumber === 3) {
    diceImage.style.visibility = "visible";
    diceImage.src = "https://i.imgur.com/qaekzKO.png";
  } else if (randomNumber === 4) {
    diceImage.style.visibility = "visible";
    diceImage.src = "https://i.imgur.com/qbqvQvB.png";
  } else if (randomNumber === 5) {
    diceImage.style.visibility = "visible";
    diceImage.src = "https://i.imgur.com/eeBcrqU.png";
  } else if (randomNumber === 6) {
    diceImage.style.visibility = "visible";
    diceImage.src = "https://i.imgur.com/vzksTKQ.png";
  }
};


const activePlayerTwo = () => {
  dotOne.style.display = "none";

  dotTwo.style.display = "block";

  diceImage.style.visibility = "hidden";

  playerOneMainScrore += playerOneCurrentScrore;
  mainScoreOne.innerText = playerOneMainScrore;

  if (playerOneMainScrore >= 50) {
    playerOneName.innerText = "Winner!";
    playerOneWin.style.display = "block"

    dotTwo.style.display = "none";

    dotOne.style.display = "block";
  }

  playerOneCurrentScrore = 0;
  currentScoreOne.innerText = 0;
};

const activePlayerOne = () => {
  dotTwo.style.display = "none";

  dotOne.style.display = "block";

  diceImage.style.visibility = "hidden";

  playerTwoMainScrore += playerTwoCurrentScrore;
  mainScoreTwo.innerText = playerTwoMainScrore;
  if (playerTwoMainScrore >= 50) {
    playerTwoName.innerText = "Winner!";
    playerTwoWin.style.display = "block"

    dotOne.style.display = "none";

    dotTwo.style.display = "block";
  }

  playerOneCurrentScrore = 0;
  currentScoreTwo.innerText = 0;
};

function game() {
  if (playerOneMainScrore >= 50) {
    playerOneName.innerText = "Winner!";
    playerOneWin.style.display = "block"

    dotTwo.style.display = "none";

    dotOne.style.display = "block";
  } else if (playerOneMainScrore >= 50) {
    playerTwoName.innerText = "Winner!";
    playerTwoWin.style.display = "block"

    dotOne.style.display = "none";

    dotTwo.style.display = "block";
  } else {
    rollDice();
    if (dotOne.style.display === "block") {
      if (randomNumber === 1) {
        playerOneCurrentScrore = 0;
        activePlayerTwo();
      } else {
        playerOneCurrentScrore += randomNumber;
        currentScoreOne.innerText = playerOneCurrentScrore;
      }
    } else if (dotTwo.style.display === "block") {
      if (randomNumber === 1) {
        playerTwoCurrentScrore = 0;
        activePlayerOne();
      } else {
        playerTwoCurrentScrore += randomNumber;
        currentScoreTwo.innerText = playerTwoCurrentScrore;
      }
    }
  }
}


function holdScore() {
  if (dotOne.style.display == "block") {
    if (playerOneMainScrore >= 50) {
      playerOneName.innerText = "Winner!";
    } else {
      activePlayerTwo();
    }
  } else if (dotTwo.style.display == "block") {
    if (playerTwoMainScrore >= 50) {
      playerTwoName.innerText = "Winner!";
    } else {
      activePlayerOne();
    }
  }
}

function newGame() {
  playerOneCurrentScrore = 0;
  currentScoreOne.innerText = 0;

  playerTwoCurrentScrore = 0;
  currentScoreTwo.innerText = 0;

  playerOneMainScrores = 0;
  mainScoreOne.innerText = 0;

  playerTwoMainScrore = 0;
  mainScoreTwo.innerText = 0;

  playerOneName.innerHTML = "Player 1";
  playerTwoName.innerHTML = "Player 2";

  dotOne.style.display = "block";
  dotTwo.style.display = "none";
  

  playerOneWin.style.display = "none";
  playerTwoWin.style.display = 'none';

  diceImage.style.visibility = "hidden";
}

rollDiceBtn.addEventListener("click", game);
holdBtn.addEventListener("click", holdScore);
newGameBtn.addEventListener("click", newGame);