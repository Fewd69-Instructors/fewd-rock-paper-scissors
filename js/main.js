$(function(){
  var humanScore = 0;
  var computerScore = 0;
  var rockPaperScissors = ["rock", "paper", "scissors"];
  var humanPlay; 
  var computerPlay;
  var results;

  $("#rock").click(ifRock);
    //event.preventdefault();
  $("#scissors").click(ifScissors);
  $("#paper").click(ifPaper);

  function botPlay() {
     return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
  }

  function gameStatus(){
    $("#status").text("you played " + humanPlay + ". the bot played " + computerPlay + ". you " + results );
  }

  function userWins(){
    results = "win";
    gameStatus();
    humanScore = humanScore + 1;
    $("#humanScore").text(humanScore); 
  }

  function botWins(){
    results = "lost";
    gameStatus();
    computerScore = computerScore +1;
    $("#computerScore").text(computerScore);
  }

  function gameTied(){
    results = "tied";
    gameStatus();
  }

  function ifRock (){
    computerPlay = botPlay();
    humanPlay = "rock";

    if (computerPlay === humanPlay){
      gameTied()

    } else if (computerPlay === "paper"){
      botWins();

    } else if (computerPlay === "scissors"){
      userWins();   
    }

  }

  function ifPaper (){
    computerPlay = botPlay();
    humanPlay = "paper";

    if (computerPlay === humanPlay){
      gameTied()

    } else if (computerPlay === "scissors"){
      botWins();

    } else if (computerPlay === "rock"){
      userWins();   
    }

  }
  function ifScissors (){
    computerPlay = botPlay();
    humanPlay = "scissors";

    if (computerPlay === humanPlay){
      gameTied()

    } else if (computerPlay === "rock"){
      botWins();

    } else if (computerPlay === "paper"){
      userWins();   
    }

  }

});

