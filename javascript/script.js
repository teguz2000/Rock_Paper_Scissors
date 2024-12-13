let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());

function getComputerChoice ()
{
    const randomNumber = Math.round(Math.random() * 100);
    let computerChoice;

    switch(randomNumber % 3)
    {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            computerChoice = "Ops, something is wrong";
            break;
    }

    return computerChoice;
}

function getHumanChoice ()
{
    let humanChoice="default";

    while(
        humanChoice != "rock" &&
        humanChoice != "paper" &&
        humanChoice != "scissors")
        {
            humanChoice = prompt("Insert your choice", "").toLowerCase().trim();
        }

    return humanChoice;
}

function playRound (humanChoice, computerChoice)
{
    const _humanChoice = humanChoice;
    const _computerChoice = computerChoice;
    let winner;

    if(_humanChoice === _computerChoice)
    {
        console.log("You draw, both players have played "+_humanChoice + ".");
        return;
    }

    switch(_humanChoice)
    {
        case "rock":
            (_computerChoice === "scissors") ? winner = 0 : winner = 1;
            break;
        case "paper":
            (_computerChoice === "rock") ? winner = 0 : winner = 1;
            break;
        case "scissors":
            (_computerChoice === "paper") ? winner = 0 : winner = 1;
            break;
        default:
            winner = 2;
            break;
    }

    if(winner === 0)
    {
        console.log("You won, " + _humanChoice + " beats " + _computerChoice);
        humanScore++;
    }
    else if(winner === 1)
    {
        console.log("You lost, " + _computerChoice + " beats " + _humanChoice);
        computerScore++;
    }
    else
    {
        console.log("Wait, something went wrong!");
    }
}