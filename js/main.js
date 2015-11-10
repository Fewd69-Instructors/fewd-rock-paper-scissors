$(function() {

  var humanScore = 0;
  var computerScore = 0;
  var rockPaperScissors = ["rock", "paper", "scissors"];

  $("#rock").click(ifRock);

    function ifRock() {

      var computerAnswer = rockPaperScissors[Math.floor(rockPaperScissors.length * Math.random())];
      
      if (computerAnswer === "rock") {
        $("#status").text("You played rock. The bot played rock. You tie.");
        console.log("Tie.");
        } 

      else if (computerAnswer === "scissors") {
        $("#status").text("You played rock. The bot played scissors. You win.");
        humanScore = humanScore + 1;
        $("#humanScore").text(humanScore);
        // botScore = botScore + 0;
        // $("#botScore").text(botScore);
        console.log("Human won.");
        }

      else if (computerAnswer === "paper") {
        $("#status").text("You played rock. The bot played paper. You lose.");
        // humanScore = humanScore + 0;
        // $("#humanScore").text(humanScore);
        computerScore = computerScore + 1;
        $("#computerScore").text(computerScore);
        console.log("Bot won.");
      }

      };

  $("#paper").click(ifPaper);

    function ifPaper() {

      var computerAnswer = rockPaperScissors[Math.floor(rockPaperScissors.length * Math.random())];
      
      if (computerAnswer === "paper") {
        $("#status").text("You played paper. The bot played paper. You tie.");
        // humanScore = humanScore + 0;
        // $("#humanScore").text(humanScore);
        // botScore = botScore + 0;
        // $("#botScore").text(botScore);
        console.log("Tie.");
        } 

      else if (computerAnswer === "rock") {
        $("#status").text("You played paper. The bot played rock. You win.");
        humanScore = humanScore + 1;
        $("#humanScore").text(humanScore);
        // botScore = botScore + 0;
        // $("#botScore").text(botScore);
        console.log("Human won.");
        }

      else if (computerAnswer === "scissors") {
        $("#status").text("You played paper. The bot played scissors. You lose.");
        // humanScore = humanScore + 0;
        // $("#humanScore").text(humanScore);
        computerScore = computerScore + 1;
        $("#computerScore").text(computerScore);
        console.log("Bot won.");
      }

      };

  $("#scissors").click(ifScissors);

    function ifScissors() {

      var computerAnswer = rockPaperScissors[Math.floor(rockPaperScissors.length * Math.random())];
      
      if (computerAnswer === "scissors") {
        $("#status").text("You played scissors. The bot played scissors. You tie.");
        // humanScore = humanScore + 0;
        // $("#humanScore").text(humanScore);
        // botScore = botScore + 0;
        // $("#botScore").text(botScore);
        console.log("Tie.");
        } 

      else if (computerAnswer === "paper") {
        $("#status").text("You played scissors. The bot played paper. You win.");
        humanScore = humanScore + 1;
        $("#humanScore").text(humanScore);
        // botScore = botScore + 0;
        // $("#botScore").text(botScore);
        console.log("Human won.");
        }

      else if (computerAnswer === "rock") {
        $("#status").text("You played scissors. The bot played rock. You lose.");
        // humanScore = humanScore + 0;
        // $("#humanScore").text(humanScore);
        computerScore = computerScore + 1;
        $("#computerScore").text(computerScore);
        console.log("Bot won.");
      }

      };
});

