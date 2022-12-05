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

console.log(getComputerChoice());

