console.log(getComputerChoice());
console.log(getHumanChoice());

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