let playerPoints = 0;
let CompPoints = 0;


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



function playRound(playerChoice,computerChoice){
    if(!(CompPoints >= 5 || playerPoints >= 5)){
        if(playerChoice == computerChoice){
            return `Draw!You both choose ${playerChoice}`;
    
    
        }
    
        if(playerChoice == "rock"){
            if(computerChoice == "paper"){
                CompPoints += 1;
                return "You lose! Paper beats Rock";
            }
    
            else{
                playerPoints += 1;
                return "You win! Rock beats Scissor";
                
            }
        }
    
        if(playerChoice == "paper"){
            if(computerChoice == "rock"){
                playerPoints += 1;
                return "You win! Paper beats Rock";
                
                
            }
    
            else{
                CompPoints += 1;
                return "You lose!  Scissor beats paper";
            }
        }
    
        if(playerChoice == "scissor"){
            if(computerChoice == "paper"){
                playerPoints += 1;
                return "You win! Scissor beats Paper";
                
            }
    
            else{
                CompPoints += 1;
                return "You lose!  Rock beats Scissor";
            }
        }
    
    }
    
    

}


function game(){

    if(!(CompPoints >= 5 || playerPoints >= 5)){
        const container = document.querySelector('#container');
        const playerResult = document.createElement('p'); 
        const compResult = document.createElement('p'); 
        const pScore = document.createElement('p');
        const cScore = document.createElement('p'); 

        const matchOutcome = document.createElement('p'); 
        const computerChoice = getComputerChoice();
        
        playerResult.textContent = 'Player: '+ (playerChoice) ;
        compResult.textContent =  'Computer: ' + (computerChoice);
        matchOutcome.textContent = (playRound(playerChoice,computerChoice));
        pScore.textContent = `Player Score:  ${playerPoints}`;
        cScore.textContent = `Computer Score:  ${CompPoints}`;
        container.append(playerResult);
        container.append(compResult);
        container.append(matchOutcome);
        container.append(pScore);
        container.append(cScore);
    
    }

    else{
        const container = document.querySelector('#container');
        const result = document.createElement('p');
        if(CompPoints > playerPoints){
            result.textContent = "The winner of the game is the Computer";
        }

        if(CompPoints < playerPoints){
            result.textContent = "The winner of the game is the player";
        }

        container.append(result);
    }
    
    
    
    
    

}


let playerChoice = "";
const btn1 = document.querySelector('#rock');
btn1.addEventListener('click', () =>{ playerChoice = "rock"
game()});

const btn2 = document.querySelector('#paper');
btn2.addEventListener('click', () =>{ playerChoice = "paper"
game()});

const btn3 = document.querySelector('#scissor');
btn3.addEventListener('click', () =>{ playerChoice = "scissor"
game()});



