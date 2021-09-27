//func computerPlay pick rock paper scissors at random - random number between  <=33 <=66 <=100

function computerPlay(){
let randomNumber = Math.floor(Math.random()*100-1);
        if (randomNumber >=0 && randomNumber <=33) { cpuMove=("rock");
    }   if (randomNumber >=34 && randomNumber <=66) { cpuMove=("paper"); 
    }   if (randomNumber >=67 && randomNumber <=99){ cpuMove=("scissors");
    }
    //console.log("Super Computer choses: " +cpuMove) 
    
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


function playRound() {

    if (choice === "rock" && cpuMove === "rock") { console.log("DRAW!")
}    if (choice === "paper" && cpuMove === "paper") { console.log("DRAW!")
}    if (choice === "scissors" && cpuMove === "scissors") { console.log("DRAW!")
}

    
}

computerPlay();
playerSelection();
playRound();












