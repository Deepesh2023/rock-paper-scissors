// make an array
let worriors = ["rock", "scissors", "paper"];

// choose a random number for computer `
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

//  the winnning logic
function winner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    //  alert("Its a tie");
  } else if (computerSelection == playerSelection + 1) {
    //  alert("you won! " + result(playerSelection, computerSelection));
  } else if (playerSelection == computerSelection + 1) {
    // alert("You lose! " + result(computerChoice, playerSelection));
  } else if (playerSelection == 2 && computerSelection != 1) {
    // alert("you won! " + result(playerSelection, computerSelection));
  } else if (computerSelection == 2 && playerSelection != 1) {
    // alert("You lose! " + result(computerSelection, playerSelection));
  }
}

// displaying the choices
function choiceDisplay(userChoice, computerChoice) {
  player.appendChild(images[userChoice]);
  computer.appendChild(images2[computerChoice]);

  setTimeout(rmoveImage, 2000);

  // player.removeChild(images[userChoice]);
}

function rmoveImage() {
  player.removeChild(images[userChoice]);
  computer.removeChild(images2[computerChoice]);
}

const display = document.querySelector(".display");
const player = document.querySelector(".player .image");
const computer = document.querySelector(".computer .image");

// selecting the worrior
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

const images = [rockImage, scissorsImage, paperImage];
const images2 = [rockImage2, scissorsImage2, paperImage2];

let userChoice;
let computerChoice;

// console.log(userChoice, computerChoice);

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
});
paper.addEventListener("click", () => {
  userChoice = 2;
  computerChoice = getComputerChoice();
  choiceDisplay(userChoice, computerChoice);
});

reset.addEventListener("click", () => {
  window.location.reload();
});
