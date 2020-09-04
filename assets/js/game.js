// added the main variables for the game //
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// added the scores that will be displayed on the main page//
const displaycomputerScore = document.getElementById("cscore");
const displayhumanScore = document.getElementById("uscore");
const displaycurrentRoundNumber = document.getElementById("rounds");
const displaycomputerchoice = document.getElementById("computer-choice");

// user choices of input //
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' ||
        userInput === 'paper' ||
        userInput === 'scissors') { return userInput; } else { console.log('Error!') }
};
// generating computer choice //
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return 'Rock'
        case 1: return 'Paper'
        case 2: return 'Scissors'
    }
}
// decide the winner //
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) { return 'The Game is a tie' }

    if (userChoice === 'rock') {
        if (computerChoice === 'Paper') {
            return 'The Computer Won!';
        } else {
            return 'You Won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'Scissors') {
            return 'The Computer Won!';
        } else {
            return 'You Won!'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'Rock') {
            return 'The Computer Won!';
        } else {
            return 'You Won!'
        }
    }
};
