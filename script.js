// make an array
let worriors = ["rock", "scissors", "paper"];

// choose a random number for computer `
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

// the winnning logic
// function winner(playerSelection, computerSelection) {
//   result = function (winner, loser) {
//     result = worriors[winner] + " beats " + worriors[loser];
//     return result;
//   };

//   if (playerSelection == computerSelection) {
//     alert("Its a tie");
//   } else if (computerSelection == playerSelection + 1) {
//     alert("you won! " + result(playerSelection, computerSelection));
//   } else if (playerSelection == computerSelection + 1) {
//     alert("You lose! " + result(computerChoice, playerSelection));
//   } else if (playerSelection == 2 && computerSelection != 1) {
//     alert("you won! " + result(playerSelection, computerSelection));
//   } else if (computerSelection == 2 && playerSelection != 1) {
//     alert("You lose! " + result(computerSelection, playerSelection));
//   }
// }

// displaying the choices
function choiceDisplay(playerSelection, computerSelection) {
  player.textContent = playerSelection;
  computer.textContent = computerSelection;
}

const display = document.querySelector(".display");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");

// selecting the worrior
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

let userChoice;
let computerChoice = getComputerChoice();

rock.addEventListener("click", () => {
  userChoice = 0;
  choiceDisplay(worriors[userChoice], worriors[computerChoice]);
  // winner(userChoice, computerChoice);
});
scissors.addEventListener("click", () => {
  userChoice = 1;
  choiceDisplay(worriors[userChoice], worriors[computerChoice]);
  // winner(userChoice, computerChoice);
});
paper.addEventListener("click", () => {
  userChoice = 2;
  choiceDisplay(worriors[userChoice], worriors[computerChoice]);
  // winner(userChoice, computerChoice);
});
