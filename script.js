// make an array
let worriors = ["rock", "scissors", "paper"];

// choose a random number for computer `
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}

// the winnning logic
function winner(playerSelection, computerSelection) {
  result = function (winner, loser) {
    result = worriors[winner] + " beats " + worriors[loser];
    return result;
  };

  if (playerSelection == computerSelection) {
    alert("Its a tie");
  } else if (computerSelection == playerSelection + 1) {
    alert("you won! " + result(playerSelection, computerSelection));
  } else if (playerSelection == computerSelection + 1) {
    alert("You lose! " + result(computerChoice, playerSelection));
  } else if (playerSelection == 2 && computerSelection != 1) {
    alert("you won! " + result(playerSelection, computerSelection));
  } else if (computerSelection == 2 && playerSelection != 1) {
    alert("You lose! " + result(computerSelection, playerSelection));
  }
}

// get users input `
let getUserInput = prompt("Choose your Worrior \n Rock \n Paper \n Scissors");
getUserInput = getUserInput.toLowerCase();
let computerChoice = getComputerChoice();
let userChoice;

// compare it to the array and get the `number-
if (getUserInput == worriors[0]) {
  userChoice = 0;
} else if (getUserInput == worriors[1]) {
  userChoice = 1;
} else if (getUserInput == worriors[2]) {
  userChoice = 2;
}

// console.log ("you chose " + worriors[userChoice] + "\n" + "computer chose " + worriors[computerChoice]);

// compare the number to the computers `choice
// declare winner if any or declare tie`
winner(userChoice, computerChoice);