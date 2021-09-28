
let playerScore = 0;
let cpuScore = 0;


function computerPlay() {

    computerSelection =  Math.floor(Math.random()*3);
   
         
    if (computerSelection === 0) { 
        return "rock";
    }   
    else if (computerSelection === 1) {
        return "paper";
    }   
    else { 
        return "scissors"; 
   }
   
}

   
 

 function playRound(computerMove, playerMove) {   

    computerMove = computerPlay();
    
    playerMove = prompt("rock paper scissors").toLowerCase();
    console.log("player move: "+playerMove);
    console.log("cpu move: "+computerMove)
    

    if (playerMove === computerMove) {
        return "draw";
    }
    else if (playerMove === "rock" && computerMove === "scissors") {
        return "player win";
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        return "player win";
    }   
    else if (playerMove === "scissors" && computerMove === "paper") { 
        return "player win";
    }
    else if (playerMove === "rock" && computerMove === "paper") {
        return "cpu win";
    }    
    else if (playerMove === "paper" && computerMove === "scissors") {
        return "cpu win";
    }  
    else if (playerMove === "scissors" && computerMove === "rock") {
        return "cpu win";
    }   
    else { alert ("OH NO!")
}
   
}








console.log("round outcome: "+playRound())






