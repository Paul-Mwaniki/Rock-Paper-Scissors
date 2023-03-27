let CompChoice = function getComputerChoice(){

    const options = ["rock", "paper", "scissors"];

    return options[Math.floor(Math.random()*3)];
};

function playRound(userChoice, getComputerChoice){

    let user = prompt("Enter either rock,paper or scissors").toLowerCase();
    console.log("User Selected: " + user);
    let comp = CompChoice();
    console.log("Computer Selected: " + comp);


    if(user =="rock" && comp =="paper"){
        console.log("Comp Wins");
    }else if (user == "rock" && comp=="scissors"){
        console.log("User Wins")
    }else if (user == "paper" && comp == "scissors"){
        console.log("Comp wins");
    }else if (user=="paper" && comp=="rock"){
        console.log("User wins");
    }else if (user=="scissors" && comp=="paper"){
        console.log("User wins");
    }else if (user=="scissors" && comp=="rock"){
        console.log("Comp Wins");
    }else{
        console.log("Draw");
    }

}

