$(document).ready(function(){

var humanScore = 0;
var botScore = 0;
var options = ["rock", "paper", "scissors"];

$("#rock").click(playRock);

function playRock(){
  var botChoice = options[Math.floor(options.length * Math.random())];

if (botChoice === "scissors") {
  humanScore = humanScore + 1;

  $('#humanScore').text(humanScore);
  $("#status").html("You played <strong>rock</strong>. The bot played <strong>scissors</strong>. <br>You win! :)");
}
else if (botChoice === 'paper') {
  botScore = botScore + 1;

  $('#botScore').text(botScore);
  $("#status").html("You played <strong>rock</strong>. The bot played <strong>paper</strong>. <br>You lose! :(");
}
else  
  $("#status").html("You played <strong>rock</strong>. The bot played <strong>rock</strong>. <br>You tie! :|");

}

$('#paper').click(playPaper);

function playPaper(){
  var botChoice = options[Math.floor(options.length * Math.random())];

if (botChoice === "scissors") {
  botScore = botScore + 1;

  $('#botScore').text(botScore);
  $("#status").html("You played <strong>paper</strong>. The bot played <strong>scissors</strong>. <br>You lose! :(");
}
else if (botChoice === 'rock') {
  humanScore = humanScore + 1;

  $('#humanScore').text(humanScore);
  $("#status").html("You played <strong>paper</strong>. The bot played <strong>rock</strong>. <br>You win! :)");
}
else  
  $("#status").html("You played <strong>paper</strong>. The bot played <strong>paper</strong>. <br>You tie. :|");

}

$('#scissors').click(playScissors);

function playScissors(){
  var botChoice = options[Math.floor(options.length * Math.random())];

if (botChoice === "rock") {
  botScore = botScore + 1;

  $('#botScore').text(botScore);
  $("#status").html("You played <strong>scissors</strong>. The bot played <strong>rock</strong>. <br>You lose! :(");
}
else if (botChoice === 'paper') {
  humanScore = humanScore + 1;

  $('#humanScore').text(humanScore);
  $("#status").html("You played <strong>scissors</strong>. The bot played <strong>paper</strong>. <br>You win! :)");
}
else  
  $("#status").html("You played <strong>scissors</strong>. The bot played <strong>scissors</strong>. <br>You tie. :|");

}

});
