let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let moves = ['rock', 'paper', 'scissors'];
	return moves[Math.floor(Math.random() * moves.length)];
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

function scoreTracker(result, playerChoice, computerChoice) {
	let message = '';
	if (result == true) {
		playerScore++;
		message = `Nice job lil [redacted] ${playerChoice} beats ${computerChoice}`;
		scoreUpdate(message);
	} else if (result == false) {
		computerScore++;
		message = `Dumba** ${computerChoice} beats ${playerChoice}`;
		scoreUpdate(message);
	} else {
		message = `Bruh... ${computerChoice} matches ${playerChoice}`;
		scoreUpdate(message);
	}
}

function checkWinner(playerScore, computerScore) {
	if (playerScore == 5) {
		resetScore();
	} else if (computerScore == 5) {
		resetScore();
	}
}

function resetScore() {
	playerScore = 0;
	computerScore = 0;
}

function scoreUpdate(message) {
	tempPlayerScore = playerScore;
	tempComputerScore = computerScore;

	checkWinner(playerScore, computerScore);

	const scoreDisplay = document.querySelector('.score-display');
	if (scoreDisplay.querySelector('img') != null) {
		scoreDisplay.removeChild(scoreDisplay.querySelector('img'));
	}
	const currentScore = scoreDisplay.querySelector('.current-score');
	currentScore.textContent = `Player: ${tempPlayerScore} Computer: ${tempComputerScore}`;

	const messageDisplay = scoreDisplay.querySelector('.message');
	messageDisplay.textContent = message;

	if (tempPlayerScore == 5) {
		const winImage = document.createElement('img');
		winImage.setAttribute('src', './images/smiling-tooth.webp');
		scoreDisplay.appendChild(winImage);
	} else if (tempComputerScore == 5) {
		const lossImage = document.createElement('img');
		lossImage.setAttribute('src', './images/cry.gif');
		scoreDisplay.appendChild(lossImage);
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
