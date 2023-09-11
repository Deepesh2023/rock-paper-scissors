// make an array
const worriors = ["rock", "scissors", "paper"];

// choose a random number for computer `
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

//  the winnning logic
function winner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
  } else if (computerSelection == playerSelection + 1) {
    // the user wins
    sounds[playerSelection].play();
    userScore++;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    scoreCheck(userScore, computerScore);
  } else if (playerSelection == computerSelection + 1) {
    // the computer wins
    sounds[computerSelection].play();
    computerScore++;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    scoreCheck(userScore, computerScore);
  } else if (playerSelection == 2 && computerSelection != 1) {
    // the user wins
    sounds[playerSelection].play();
    userScore++;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    scoreCheck(userScore, computerScore);
  } else if (computerSelection == 2 && playerSelection != 1) {
    //  the computer wins
    sounds[computerSelection].play();
    computerScore++;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    scoreCheck(userScore, computerScore);
  }
}
// displaying the choices
function choiceDisplay(userChoice, computerChoice) {
  player.appendChild(images[userChoice]);
  computer.appendChild(images2[computerChoice]);

  setTimeout(rmoveImage, 2000);
}

function rmoveImage() {
  player.removeChild(images[userChoice]);
  computer.removeChild(images2[computerChoice]);
}

function scoreCheck(userScore, computerScore) {
  if (userScore == 5) {
    gameWon.play();
    alert("You Won!");
    window.location.reload();
  } else if (computerScore == 5) {
    gameOver.play();
    alert("You lose!");
    window.location.reload();
  }
}

const display = document.querySelector(".display");
const player = document.querySelector(".player .image");
const computer = document.querySelector(".computer .image");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reset = document.querySelector(".reset button");

const rockImage = document.createElement("img");
const paperImage = document.createElement("img");
const scissorsImage = document.createElement("img");

const rockImage2 = document.createElement("img");
const paperImage2 = document.createElement("img");
const scissorsImage2 = document.createElement("img");

rockImage.src = "icons/rock.svg";
paperImage.src = "icons/paper.svg";
scissorsImage.src = "icons/scissors.svg";

rockImage2.src = "icons/rock.svg";
paperImage2.src = "icons/paper.svg";
scissorsImage2.src = "icons/scissors.svg";

rockImage.alt = "rock";
paperImage.alt = "paper";
scissorsImage.alt = "scissors";

rockImage2.alt = "rock";
paperImage2.alt = "paper";
scissorsImage2.alt = "scissors";

const scissorsSound = new Audio("/audio/scissors-cutting-paper-1-101193.mp3");
const rockSound = new Audio("/audio/rock-destroy-6409.mp3");
const paperSound = new Audio("/audio/crumple-03-40747.mp3");
gameOver = new Audio("/audio/negative_beeps-6008.mp3");
gameWon = new Audio("/audio/success-fanfare-trumpets-6185.mp3");

const images = [rockImage, scissorsImage, paperImage];
const images2 = [rockImage2, scissorsImage2, paperImage2];
const sounds = [rockSound, scissorsSound, paperSound];

let userChoice;
let computerChoice;

let userScore = 0;
let computerScore = 0;

const userScoreDisplay = document.querySelector(".playerScore");
const computerScoreDisplay = document.querySelector(".computerScore");

rock.addEventListener("click", () => {
  userChoice = 0;
  computerChoice = getComputerChoice();
  choiceDisplay(userChoice, computerChoice);
  winner(userChoice, computerChoice);
});
scissors.addEventListener("click", () => {
  userChoice = 1;
  computerChoice = getComputerChoice();
  choiceDisplay(userChoice, computerChoice);
  winner(userChoice, computerChoice);
});
paper.addEventListener("click", () => {
  userChoice = 2;
  computerChoice = getComputerChoice();
  choiceDisplay(userChoice, computerChoice);
  winner(userChoice, computerChoice);
});

userScoreDisplay.textContent = userScore;
computerScoreDisplay.textContent = computerScore;

reset.addEventListener("click", () => {
  window.location.reload();
});
