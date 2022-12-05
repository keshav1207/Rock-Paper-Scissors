function getComputerChoice(){
    let Choice = Math.floor(Math.random()*3);
    let compChoice = "";
     if(Choice == "0"){
         compChoice = "rock";
     }
     else if(Choice == "1"){
             compChoice = "paper";
     }
     else if(Choice == "2"){
             compChoice = "scissor";
     }
     
     
     return compChoice;

}

const playerChoice = prompt("Its your turn, enter your next move:").toLowerCase();
const computerChoice = getComputerChoice();

function playRound(playerChoice,computerChoice){
    if(playerChoice == computerChoice){
        return `Draw!You both choose ${playerChoice}`;


    }

    if(playerChoice == "rock"){
        if(computerChoice == "paper"){
            return "You lose! Paper beats Rock";
        }

        else{
            return "You win! Rock beats Scissor";
        }
    }

    if(playerChoice == "paper"){
        if(computerChoice == "rock"){
            return "You win! Paper beats Rock";
        }

        else{
            return "You lose!  Scissor beats paper";
        }
    }

    if(playerChoice == "scissor"){
        if(computerChoice == "paper"){
            return "You win! Scissor beats Paper";
        }

        else{
            return "You lose!  Rock beats Scissor";
        }
    }

    

}


