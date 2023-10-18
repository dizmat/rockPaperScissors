function getComputerChoice() {
	let moves = ['rock', 'paper', 'scissors'];
	return moves[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
	if (playerChoice == computerChoice) {
		scoreTracker('tie', playerChoice, computerChoice);
	} else if (
		(playerChoice == 'rock' && computerChoice == 'paper') ||
		(playerChoice == 'paper' && computerChoice == 'scissors') ||
		(playerChoice == 'scissors' && computerChoice == 'rock')
	) {
		scoreTracker(false, playerChoice, computerChoice);
	} else {
		scoreTracker(true, playerChoice, computerChoice);
	}
}

let playerScore = 0;
let computerScore = 0;

function scoreTracker(result, playerChoice, computerChoice) {
	if (result == true) {
		playerScore++;
		console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
	} else if (result == false) {
		computerScore++;
		console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
	} else {
		console.log(`Tie! ${computerChoice} matches ${playerChoice}`);
	}
	console.log(`Player: ${playerScore} , Computer: ${computerScore}`);

	checkWinner(playerScore, computerScore);
}

function checkWinner(playerScore, computerScore) {
	if (playerScore == 5) {
		console.log('Player Wins!');
		playerScore = 0;
		computerScore = 0;
		return;
	} else if (computerScore == 5) {
		console.log('Computer Wins :(');
		playerScore = 0;
		computerScore = 0;
		return;
	}
}

const selectRock = document.querySelector('#rock');
const selectPaper = document.querySelector('#paper');
const selectScissors = document.querySelector('#scissors');

selectRock.addEventListener('click', () => {
	playRound('rock', getComputerChoice());
});
selectPaper.addEventListener('click', () => {
	playRound('paper', getComputerChoice());
});
selectScissors.addEventListener('click', () => {
	playRound('scissors', getComputerChoice());
});
