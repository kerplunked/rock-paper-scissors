
let playerScore = 0;
let cpuScore = 0;



function computerPlay(){
let randomNumber = Math.floor(Math.random()*100-1);
        if (randomNumber >=0 && randomNumber <=33) { cpuMove=("rock");
    }   if (randomNumber >=34 && randomNumber <=66) { cpuMove=("paper"); 
    }   if (randomNumber >=67 && randomNumber <=99){ cpuMove=("scissors");
    }
    console.log("CPU: " +cpuMove) 
    
 }




//playerSelection ask for input rps into console then accept input of rps


function playerSelection() {
    const playerMove = prompt("rock paper scissors").toLowerCase();
    if (playerMove === "rock") { choice=("rock");
    }if (playerMove === "paper") { choice=("paper");
    }if (playerMove === "scissors") { choice=("scissors");
    
  }

    console.log("you: "+choice)
 
}


//if outcome happens add to score 0 or 1

function playRound() {
       

    let roundTie;
   if (choice === "rock" && cpuMove === "rock")console.log("draw", playerScore +=1, cpuScore +=1);
   if (choice === "paper" && cpuMove === "paper")console.log("draw", playerScore +=1, cpuScore +=1);
   if (choice === "scissors" && cpuMove === "scissors")console.log("draw", playerScore +=1, cpuScore +=1);

 

   
   if (choice === "rock" && cpuMove === "scissors")console.log("player win", playerScore +=1) ;
   if (choice === "paper" && cpuMove === "rock")console.log("player win", playerScore +=1) ;
   if (choice === "scissors" && cpuMove === "paper")console.log("player win", playerScore +=1) ;
  

    
   if (choice === "rock" && cpuMove === "paper")console.log("cpu win", cpuScore +=1); 
   if (choice === "paper" && cpuMove === "scissors")console.log("cpu win", cpuScore +=1); 
   if (choice === "scissors" && cpuMove === "rock")console.log("cpu win", cpuScore +=1); 

     
   
  
    console.log("Player score: " +playerScore)
    console.log("CPU score: "+cpuScore)

}

playerSelection();
computerPlay();
playRound();


playerSelection();
computerPlay();
playRound();


playerSelection();
computerPlay();
playRound();


playerSelection();
computerPlay();
playRound();



playerSelection();
computerPlay();
playRound();


if (playerScore >=3) console.log("PLAYER WINS - owned that cpu");
if (cpuScore >=3) console.log("CPU WINS - you lose....");





