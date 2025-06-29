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

const getComputerChoice = () => {
    let ans = Math.floor(Math.random() * 3) + 1;
    let a = "";
    if (ans == 1) {
        a = "rock";
    }
    else if (ans == 2) {
        a = "paper";
    }
    else {
        a = "scissors";
    }
    console.log("ziggy chose: " + a);
    return ans;
}

const getHumanChoice = async () => {
    let ans = await ask("Enter 1: rock, 2; paper, 3: scissors: ");
    if (ans == 1) {
        a = "rock";
    }
    else if (ans == 2) {
        a = "paper";
    }
    else {
        a = "scissors";
    }
    console.log("you chose: " + a);
    return ans;
} 

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice == computerChoice) {
        console.log("Draw!");
        return 0;
    }
    if ((humanChoice == 3 && computerChoice == 1) || (humanChoice < computerChoice)) {
        console.log("you lose and ziggy wins!");
        computerScore++;
    }
    else {
        console.log("you win and ziggy losses!");
        humanScore++;
    }

    return 0;
}

const playGame = async () => {
    for (let i = 0; i < 5; i++){
        console.log("Round: " + i);
        let humanChoice = await getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        console.log('ziggy score: ' + computerScore);
        console.log('your score: ' + humanScore);
    }

    readline.close();

    if (humanScore > computerScore) {
        console.log('The ultimate winner is: YOU!');
    }
    else console.log('The ultimate winner is: ZIGGY!');
};

function main() {
    playGame();
}

main();