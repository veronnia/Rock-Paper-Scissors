humanScore = 0;
computerScore = 0;

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = (question) => new Promise(resolve => {
    readline.question(question, (answer) => {
        resolve(Number(answer));
    });
});

const choiceToString = (choice) => {
    if (choice === 1) return "rock";
    if (choice === 2) return "paper";
    if (choice === 3) return "scissors";
    return "unknown";
}

const getComputerChoice = () => {
    let ans = Math.floor(Math.random() * 3) + 1;
    return ans;
}

const getHumanChoice = async () => {
    let ans = await ask("Enter 1: rock, 2; paper, 3: scissors: ");
    return ans;
} 

const playRound = (humanChoice, computerChoice) => {
    console.log("_You: " + choiceToString(humanChoice));
    console.log("_Ziggy: " + choiceToString(computerChoice));

    if (humanChoice === computerChoice) {
        console.log("Draw!");
        return;
    }

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

    return 0;
}

const playGame = async () => { 
    while (humanScore < 5 && computerScore < 5){
        console.log("____Round: " + i);
        let humanChoice = await getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        console.log('ziggy score: ' + computerScore);
        console.log('your score: ' + humanScore);
        console.log("--------------------------------------------------");
    }

    readline.close();

    if (humanScore > computerScore) {
        console.log('The ultimate winner is: YOU!!!');
    }
    else if (humanScore < computerScore) {
        console.log('The ultimate winner is: ZIGGY!!!');
    }
    else {
        console.log('It ended with a draw!');
    }
}

function main() {
    playGame();
}