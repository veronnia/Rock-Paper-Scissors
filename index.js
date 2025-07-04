humanScore = 0;
computerScore = 0;

const choiceToString = (choice) => {
    if (choice === 1) return "rock";
    if (choice === 2) return "paper";
    if (choice === 3) return "scissors";
    return "";
}

const getComputerChoice = () => {
    let ans = Math.floor(Math.random() * 3) + 1;
    return ans;
}

function changeChoice(hChoice, cChoice) {
    document.getElementById("zigChoice").innerText = choiceToString(cChoice);
    document.getElementById("youChoice").innerText = choiceToString(hChoice);
}

const playRound = (humanChoice, computerChoice) => {
    changeChoice(humanChoice, computerChoice);    

    if (humanChoice === computerChoice) {
        document.getElementById("round-win").innerText = "It's a draw!";
        return;
    }

    const winConditions = {
        1: 3,
        2: 1,
        3: 2
    };

    if (winConditions[humanChoice] === computerChoice) {
        humanScore++;
        document.getElementById("youScore").innerText = humanScore;
        if (humanScore === 5) {
            document.getElementById("round-win").innerText = "The ultimate winner is YOU!!!";
            setEverything();
            return 0;
        }
        document.getElementById("round-win").innerText = "You won this round!";
    } else {
        computerScore++;
        document.getElementById("zigScore").innerText = computerScore;
        if (computerScore === 5) {
            document.getElementById("round-win").innerText = "The ultimate winner is ZIGGY!!!";
            setEverything();
            return 0;
        }
        document.getElementById("round-win").innerText = "Ziggy won this round!";
    }

    return;
}

const playGame = (humanChoice) => { 
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

}

const rockButton = document.getElementById('rockk');
rockButton.addEventListener( 'click', () => {
    if (humanScore < 5 && computerScore < 5) playGame(1);
});

const paperButton = document.getElementById('paperr');
paperButton.addEventListener( 'click', () => {
    if (humanScore < 5 && computerScore < 5) playGame(2);
});

const scissorsButton = document.getElementById('scissorss');
scissorsButton.addEventListener( 'click', () => {
    if (humanScore < 5 && computerScore < 5) playGame(3);
});

const setButton = document.getElementById('set');
setButton.addEventListener( 'click', () => {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("zigScore").innerText = computerScore;
    document.getElementById("youScore").innerText = humanScore;
    document.getElementById("round-win").innerText = "Will you beat Ziggy";
    changeChoice(4, 4);
});
