let CompChoice = function getComputerChoice(){

    const options = ["rock", "paper", "scissors"];

    return options[Math.floor(Math.random()*3)];
};

let play = function playRound(userChoice, getComputerChoice){

    let user = prompt("Enter either rock,paper or scissors").toLowerCase();
    console.log("User Selected: " + user);
    let comp = CompChoice();
    console.log("Computer Selected: " + comp);


    if(user =="rock" && comp =="paper"){
         
        console.log("Comp Wins");
        let result = "Comp Wins";
        /*used for testing
         let comp_score = 1;
         let user_score = 0;
         console.log("Comp score:" , comp_score);
         console.log("User score:" , user_score);*/
         return result;
    }else if (user == "rock" && comp=="scissors"){
        console.log("User Wins")
        let result = "User Wins"
        /*used for testing 
        let comp_score = 0;
        let user_score = 1;        ;
        console.log("Comp score:" , comp_score);
         console.log("User score:" , user_score);*/
         return result;
    }else if (user == "paper" && comp == "scissors"){
        console.log("Comp wins");
        let result = "Comp Wins";
       /*used for testing 
        let comp_score = 1;
        let user_score = 0;
        console.log("Comp score:" , comp_score);
         console.log("User score:" , user_score);*/
         return result;
    }else if (user=="paper" && comp=="rock"){
        console.log("User Wins");
        let result = "User Wins";
        /*used for testing 
        let comp_score = 0;
        let user_score = 1
        console.log("Comp score:" , comp_score);
         console.log("User score:" , user_score);*/
         return result;
    }else if (user=="scissors" && comp=="paper"){
        console.log("User Wins");
        let result = "User Wins";
        /*used for testing 
        let comp_score = 0;
        let user_score = 1
        console.log("Comp score:" , comp_score);
         console.log("User score:" , user_score);*/
         return result;
    }else if (user=="scissors" && comp=="rock"){
        console.log("Comp Wins");
        let result = "Comp Wins";
        /*used for testing 
        let comp_score = 1;
        let user_score = 0;
         console.log("Comp score:" , comp_score);
         console.log("User score:" , user_score);*/
         return result;
    }else{
       
        console.log("Draw");
        let result = "Draw";
        return result;
    }
 
    
};

let userScore = 0;
let compScore = 0;
/*Event listeners for the RPS buttons - they call a specifc round*/
    /*Rock button event listeners*/
const btnRock = document.getElementById('rock');


btnRock.addEventListener('click', () =>{

    let userChoice = "Rock";
    let computerChoice = CompChoice();
    console.log(userChoice);
    console.log(computerChoice);

    if(computerChoice=="paper"){
        let result = "Computer wins";
        console.log(result);
        compScore += 1;
        console.log("User Score is" + userScore);
        console.log("Computer Score is" + compScore);
    }else if (computerChoice=="scissors"){
        let result = "User wins";
        console.log(result);
        userScore += 1;
        console.log("User Score is" + userScore);
        console.log("Computer Score is" + compScore);
    }else{
        let result = "draw";
        console.log(result);
        console.log("User Score is" + userScore);
        console.log("Computer Score is" + compScore);
    }
    
    if(compScore==3){
        console.log("Computer has won the game");
        console.log("Game ended, play again");
        userScore = 0;
        compScore = 0;
    }else if (userScore==3) {
        console.log("User has won the game");
        console.log("Game ended, play again");
        userScore = 0;
        compScore = 0;
    } else {
        console.log("Continue Playing");
    }

})

    /*Paper button event listeners*/
const btnPaper = document.getElementById('paper');


btnPaper.addEventListener('click', () =>{

    let userChoice = "Paper";
    let computerChoice = CompChoice();
    console.log(userChoice);
    console.log(computerChoice);

    if(computerChoice=="scissors"){
        let result = "Computer wins";
        console.log(result);
        compScore += 1;
        console.log("User Score is" + userScore);
        console.log("Computer Score is" + compScore);
    }else if (computerChoice=="rock"){
        let result = "User wins";
        console.log(result);
        userScore += 1;
        console.log("User Score is" + userScore);
        console.log("Computer Score is" + compScore);
    }else{
        let result = "draw";
        console.log(result);
        console.log("User Score is" + userScore);
        console.log("Computer Score is" + compScore);
    }
    if(compScore==3){
        console.log("Computer has won the game");
        console.log("Game ended, play again");
        userScore = 0;
        compScore = 0;
    }else if (userScore==3) {
        console.log("User has won the game");
        console.log("Game ended, play again");
        userScore = 0;
        compScore = 0;
    } else {
        console.log("Continue Playing");
    }

})

  /*Paper button event listeners*/
  const btnScissors = document.getElementById('scissors');


  btnScissors.addEventListener('click', () =>{
  
      let userChoice = "scissors";
      let computerChoice = CompChoice();
      console.log(userChoice);
      console.log(computerChoice);
  
      if(computerChoice=="rock"){
          let result = "Computer wins";
          console.log(result);
          compScore += 1;
          console.log("User Score is" + userScore);
          console.log("Computer Score is" + compScore);
      }else if (computerChoice=="paper"){
          let result = "User wins";
          console.log(result);
          userScore += 1;
          console.log("User Score is" + userScore);
          console.log("Computer Score is" + compScore);
      }else{
          let result = "draw";
          console.log(result);
          console.log("User Score is" + userScore);
          console.log("Computer Score is" + compScore);
      }

      if(compScore==3){
        console.log("Computer has won the game");
        console.log("Game ended, play again");
        userScore = 0;
        compScore = 0;
    }else if (userScore==3) {
        console.log("User has won the game");
        console.log("Game ended, play again");
        userScore = 0;
        compScore = 0;
    } else {
        console.log("Continue Playing");
    }

  })

  
/*
function game(){

    let comp_final_result=0;
    let user_final_result=0;
    for(let i = 1;i <= 5;i++){
        let final_result = play();
        
        if(final_result==="Comp Wins"){
            comp_final_result += 1;
            console.log("Comp wins round" , i);
             }
        else if(final_result==="User Wins"){
            user_final_result += 1;
            console.log(" User wins round" , i);
        }
        else{
            comp_final_result += 0;
            user_final_result += 0;
            console.log("Round " , i , " is a draw");
        }
      
    }
    console.log("comp: " + comp_final_result);
    console.log("user: " + user_final_result);
    if(comp_final_result > user_final_result){
        console.log("The winner is the COMPUTER")
    }else if (comp_final_result < user_final_result){
        console.log("The winner is the user");
    }else{
        console.log("It's a draw")
    }

}
*/
 


