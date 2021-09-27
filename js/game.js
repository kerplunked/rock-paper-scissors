//func computerPlay pick rock paper scissors at random - random number between  <=33 <=66 <=100

function computerPlay(){
let randomNumber = Math.floor(Math.random()*100-1);
        if (randomNumber >=0 && randomNumber <=33) { cpuMove=("rock");
    }   if (randomNumber >=34 && randomNumber <=66) { cpuMove=("paper"); 
    }   if (randomNumber >=67 && randomNumber <=99){ cpuMove=("scissors");
    }
    console.log("Super Computer choses: " +cpuMove) 
    
 }




//playerSelection ask for input rps into console then accept input of rps


function playerSelection() {
    const playerMove = prompt("rock paper scissors").toLowerCase();
    if (playerMove === "rock") { choice=("rock");
    }if (playerMove === "paper") { choice=("paper");
    }if (playerMove === "scissors") { choice=("scissors");
    
  }

    console.log("you picked: "+choice)
 
}


//declare winner after turn 
//scores if player wins add 1 to current score both srtart at 0
function playRound() {

     let draw, playerWin, cpuWin;
    

   if (choice === "rock" && cpuMove === "rock") draw ;
   if (choice === "paper" && cpuMove === "paper") draw;
   if (choice === "scissors" && cpuMove === "scissors") draw; 
   if (draw) console.log("draw");

   if (choice === "rock" && cpuMove === "scissors")  playerWin;
   if (choice === "paper" && cpuMove === "rock")   playerWin;
   if (choice === "scissors" && cpuMove === "paper")  playerWin;
   if (playerWin) console.log("player win");

   if (choice === "rock" && cpuMove === "paper")  cpuWin;
   if (choice === "paper" && cpuMove === "scissors")  cpuWin;
   if (choice === "scissors" && cpuMove === "rock")  cpuWin; 
   if (cpuWin) console.log("cpu win");
  
  
  

}




computerPlay();
playerSelection();
playRound();












