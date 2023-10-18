function getComputerChoice() {
    let move = ["Rock", "Paper", "Scissors"];
    const choice = Math.floor(Math.random() * 3);
    console.log(move[choice]);
}

getComputerChoice();