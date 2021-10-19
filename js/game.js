
let playerScore = 0;
let cpuScore = 0;
let playerBtn = ""


document.querySelector("#btnr");
    btnr.addEventListener("click", () => {
    playerBtn = "rock";
    playRound();
    
});

document.querySelector("#btnp");
    btnp.addEventListener("click", () => {
    playerBtn = "paper";
    playRound();
    
});

document.querySelector("#btns");
    btns.addEventListener("click", () => {
    playerBtn = "scissors";
    playRound();
    
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
    
    const moves = document.querySelector(".moves");
    moves.textContent = `You picked: ${playerMove} and The CPU picked: ${computerMove}`;
    
    const score = document.querySelector(".score");

    const total = document.querySelector(".total");
   

    const gameOver = document.createElement("div")
    container.appendChild(gameOver)
    

  


    

    if (playerMove === computerMove) { 
        score.textContent = `Draw! Both selected - ${playerMove}`;
         
    }
     if ((playerMove === "rock" && computerMove === "scissors") 
      ||    (playerMove === "paper" && computerMove === "rock") 
      ||    (playerMove === "scissors" && computerMove === "paper")) { 
        playerScore +=1; 
        score.textContent = `Player wins round - ${playerMove} beats ${computerMove}`;
        total.textContent = `Your score = ${playerScore}  CPU score = ${cpuScore}`;
    if (playerScore === 5) {
        gameOver.textContent = "YOU WIN! good job"
    } 
        
        
    }
     if ((playerMove === "rock" && computerMove === "paper")
      ||     (playerMove === "paper" && computerMove === "scissors") 
      ||     (playerMove === "scissors" && computerMove === "rock")) {
        cpuScore +=1; 
        score.textContent = `CPU wins round - ${computerMove} beats ${playerMove}`;
        total.textContent = `Your score = ${playerScore}  CPU score = ${cpuScore}`;
    if (cpuScore === 5) {
    gameOver.textContent = "CPU WINS! you lose"
    }   

    
   

 }

   function newRound() {

    if (cpuScore === 5 || playerScore === 5) {
        console.log("RESTART")

    }
 }
   
}

