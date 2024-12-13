console.log(getComputerChoice());

function getComputerChoice ()
{
    const randomNumber = Math.round(Math.random() * 100);
    let computerChoice;

    switch(randomNumber % 3)
    {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
        default:
            computerChoice = "Ops, something is wrong";
            break;
    }

    return computerChoice;
}