
let playerScore = 0;
let cpuScore = 0;


function computerNumber() {

    const computerRandom = Math.floor(Math.random()*3);

    return computerRandom;

}



function computerPlay()
{

      const computerplayerSelection = computerNumber();
     
        if (computerplayerSelection === 0) { 
    return "rock";
    }   else if (computerplayerSelection === 1) {
    return "paper";
    }   else { 
    return "scissors";
}
  
}


    

//playerSelection ask for input rps into console then accept input of rps


function playerSelection() {
    const playerMove = prompt("rock paper scissors").toLowerCase();

        if (playerMove === "rock") {
    return "rock";
    }   else if (playerMove === "paper") {
    return "paper";
    }   else if (playerMove === "scissors") {
    return "scissors"
    } 
        
  }
   
 

function playRound(playerSelection, computerPlay) {
           
      if (playerSelection === "rock" && computerPlay === "scissors") {
    return "player win"
    }   else if (playerSelection === "paper" && computerPlay === "rock") {
    return "player win"
   }    else if (playerSelection === "scissors" && computerPlay === "paper") {
       return "player win"
   }    else if (playerSelection === "rock" && computerPlay === "paper") {
   return "cpu win"
   }    else if (playerSelection === "paper" && computerPlay === "scissors") {
   return "cpu win"
   }    else if (playerSelection === "scissors" && computerPlay === "rock") {
   return "cpu win"
   }   
   
   
}



function score(playRound) {

    if (playRound === "player win") { 
        playerScore =+1
}   else if  (playRound === "cpu win") {
        cpuScore +=1
}


}


playRound;

console.log("cpu move: "+computerPlay())
console.log("player move: "+playerSelection())
console.log("round outcome: "+playRound())


console.log(playerScore,cpuScore)




