function getComputerChoice() {
	let moves = ['rock', 'paper', 'scissors'];
	return moves[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
	playerChoice.toLowerCase();

	if (playerChoice == computerChoice) {
		return 'tie';
	} else if (
		(playerChoice == 'rock' && computerChoice == 'paper') ||
		(playerChoice == 'paper' && computerChoice == 'scissors') ||
		(playerChoice == 'scissors' && computerChoice == 'rock')
	) {
		return false;
	} else {
		return true;
	}
}

function game() {
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 0; i <= 4; i++) {
		let playerChoice = prompt('Enter move');
		let computerChoice = getComputerChoice();

		let result = playRound(playerChoice, computerChoice);
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
	}
}

game();
