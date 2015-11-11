// when the scissor/paper/rock button is pressed, computer picks a side
// use a random number generator
$(function() {

$("#rock").click(shootRock);
$("#paper").click(shootPaper);
$("#scissors").click(shootScissors);

var botPlay = ["rock", "paper", "scissors"]
var botScore = 0;
var playerScore = 0;
var tieScore = 0;

function shootRock() {
  var botHand = botPlay[Math.floor(Math.random()*botPlay.length)];
  console.log(botHand);
    if (botHand === "rock"){
      console.log("You've tied!");
      $("#results").text("You've tied!");
      $("#status").text("The bot chose rock and you tied.");
      $("#ties").text(tieScore = tieScore +1);
    }
    else if (botHand === "paper"){
      console.log("You lost!");
      $("#results").text("You lost!");
      $("#status").text("The bot chose paper and you lost.");
      $("#computerScore").text(botScore = botScore +1);
    }
    else if (botHand === "scissors"){
      console.log("You Won!");
      $("#results").text("You won!");
      $("#status").text("The bot chose scissors and you won.");
      $("#humanScore").text(playerScore = playerScore +1);
    }
} 

function shootPaper() {
  var botHand = botPlay[Math.floor(Math.random()*botPlay.length)];
  console.log(botHand);
    if (botHand === "rock") {
      console.log("You won!");
      $("#results").text("You won!");
      $("#status").text("The bot chose rock and you won.");
      $("#humanScore").text(playerScore = playerScore +1);
    }
    else if (botHand === "paper"){
      console.log("You've tied!");
      $("#results").text("You've tied!");
      $("#status").text("The bot chose paper and you tied.");
      $("#ties").text(tieScore = tieScore +1);
    }
    else if (botHand === "scissors"){
      console.log("You lost!");
      $("#results").text("You lost!");
      $("#status").text("The bot chose scissors and you lost.");
      $("#computerScore").text(botScore = botScore +1);
    }
}

function shootScissors() {
  var botHand = botPlay[Math.floor(Math.random()*botPlay.length)];
  console.log(botHand);
    if (botHand === "rock"){
      console.log("You lost!");
      $("#results").text("You lost!");
      $("#status").text("The bot chose rock and you lost.");
      $("#computerScore").text(botScore = botScore +1);
    }
    else if (botHand === "paper"){
      console.log("You won!");
      $("#results").text("You won!");
      $("#status").text("The bot chose paper and you won.");
      $("#humanScore").text(playerScore = playerScore +1);
    }
    else if (botHand === "scissors"){
      console.log("You've tied!");
      $("#results").text("You've tied!");
      $("#status").text("The bot chose scissors and you tied.");
      $("#ties").text(tieScore = tieScore +1);
    }
}




});












