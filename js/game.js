//func computerPlay pick rock paper scissors at random - random number between  <=33 <=66 <=100

function computerPlay(){
let randomNumber = Math.floor(Math.random()*100-1);
        if (randomNumber >=0 && randomNumber <=33) { cpuMove=("rock");
    }   if (randomNumber >=34 && randomNumber <=66) { cpuMove=("paper"); 
    }   if (randomNumber >=67 && randomNumber <=99){ cpuMove=("scissors");
    }
    console.log("Super Computer choses: " +cpuMove) 
 }


//function gameRound - starts game asks for user input
//playerSelection ask for input rps into console then accept input of rps
//computerSelection output random computerPlay after 

function gameRound() {
    

    let playerSelection = prompt("Type rock, paper or scissors.");
    if (playerSelection  === "rock", "paper", "scissors")  ;
    console.log("You chose: " +playerSelection) ;

}

    

//log cpumove
//if you picked rock and cpu picked paper - you lose! - 
gameRound();
computerPlay();






