let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    return Math.floor(Math.random() * 3) + 1; // 1 to 3
}

const getHumanChoice = () => {
    return Number(window.prompt("Enter 1: rock, 2: paper, 3: scissors"));
}

const choiceToString = (choice) => {
    if (choice === 1) return "rock";
    if (choice === 2) return "paper";
    if (choice === 3) return "scissors";
    return "unknown";
}

const playRound = (humanChoice, computerChoice) => {
    console.log("You: " + choiceToString(humanChoice));
    console.log("Ziggy: " + choiceToString(computerChoice));

    if (humanChoice === computerChoice) {
        console.log("Draw!");
        return;
    }

    // Rock beats scissors (1 > 3), paper beats rock (2 > 1), scissors beats paper (3 > 2)
    const winConditions = {
        1: 3,
        2: 1,
        3: 2
    };

    if (winConditions[humanChoice] === computerChoice) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Ziggy wins this round!");
        computerScore++;
    }
}

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);

        console.log(`Score => You: ${humanScore}, Ziggy: ${computerScore}`);
        console.log("-----------------------------");
    }

    if (humanScore > computerScore) {
        console.log('The ultimate winner is: YOU!');
    } else if (computerScore > humanScore) {
        console.log('The ultimate winner is: ZIGGY!');
    } else {
        console.log('It\'s a tie overall!');
    }
}

function main() {
    playGame();
}

main();
