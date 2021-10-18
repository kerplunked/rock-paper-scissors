
let playerScore = 0;
let cpuScore = 0;
let playerBtn = ""




 document.querySelector("#btnr");
    btnr.addEventListener("click", () => {
    playerBtn = "rock";
    playRound();
    
});

const btnp = document.querySelector("#btnp");
    btnp.addEventListener("click", () => {
    playerBtn = "paper";
    
});


const btns = document.querySelector("#btns");
    btns.addEventListener("click", () => {
    playerBtn = "scissors";
    
});









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

   
 

 function playRound() {   

    computerMove = computerPlay();

    playerMove = playerBtn;
    
    
    console.log("player move: "+playerMove);
    console.log("cpu move: "+computerMove)
    

    if (playerMove === computerMove) { 
        console.log(`Draw! Both selected - ${playerMove}`);
        return "draw"; 
    }
    else if ((playerMove === "rock" && computerMove === "scissors") 
      ||    (playerMove === "paper" && computerMove === "rock") 
      ||    (playerMove === "scissors" && computerMove === "paper")) { 
          playerScore +=1; 
          console.log(`Player wins round - ${playerMove} beats ${computerMove}`);
        return "player win";
    }
    else if ((playerMove === "rock" && computerMove === "paper")
      ||     (playerMove === "paper" && computerMove === "scissors") 
      ||      (playerMove === "scissors" && computerMove === "rock")) {
            cpuScore +=1; 
            console.log(`CPU wins round - ${computerMove} beats ${playerMove}`);
        return "cpu win";
      
    
}
   
}

function gameWinner(){


    console.log("FINAL SCORES Player Score "+playerScore,"vs",+cpuScore, "CPU Score" );

if (cpuScore > playerScore) {
    console.log("The Computer has won the game, bad luck.");
}
else if (playerScore > cpuScore) {
    console.log("Player Victory! ");
}
else { console.log("It's a Draw...");
}

}


