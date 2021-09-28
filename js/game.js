
let playerScore = 0;
let cpuScore = 0;


function computerNumber() {

    const computerRandom = Math.floor(Math.random()*3);

    return computerRandom;

}



function computerPlay()
{

      const computerChoice = computerNumber();
     
    if (computerChoice === 0) { 
        return "rock";
    }else if (computerChoice === 1) {
        return "paper";
    }else { 
        return "scissors";
}
  
}
//console.log(computerPlay())
    

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
       

    
   if (choice === cpuMove)console.log("draw", playerScore +=1, cpuScore +=1);
    
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



    if (playerScore > cpuScore) { console.log("PLAYER WINS - owned that cpu");
}   else if (cpuScore > playerScore){ console.log("CPU WINS - you lose....");
}   else if (playerScore === cpuScore) { console.log("draw everyone wins yay");
}








//let randomNumber = Math.floor(Math.random()*100-1);
 //       if (randomNumber >=0 && randomNumber <=33) { cpuMove=("rock");
 //   }   if (randomNumber >=34 && randomNumber <=66) { cpuMove=("paper"); 
  //  }   if (randomNumber >=67 && randomNumber <=99){ cpuMove=("scissors");
//}
  //  console.log("CPU: " +cpuMove) 
    