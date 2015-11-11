// pseudocode
// there are three choices: rock, paper, scissor
// there are two choosers: human, bot

// human chooses one by clicking
// bot chooses randomly on click 

// scissor vs. rock then rock wins
// paper vs. rock then paper wins
// paper vs. scissor then scissor wins
// same choice is tie

// ...

// click rock
//   bot chooses randomly:
//   if rock then tie
//     if paper then bot wins
//       if scissor then human wins

// click paper
//   bot chooses randomly:
//   if paper then tie
//     if scissor then bot wins
//       if rock then human wins

// click scissor
//   bot chooses randomly:
//   if scissor then tie
//     if rock then bot wins
//       if paper then human wins

// human wins then humanScore + 1, message "you win"
// bot wins then computerScore + 1, message "you lose"
// tie then no change, message "you tie"

$(function(){

var botPlay = ["rock","paper","scissor"];

var playerScore = 0;
var botScore = 0;

$('#rock').click(shootRock)
  function shootRock() {
    var botHand = botPlay[Math.floor(Math.random()*botPlay.length)];
    if (botHand === "rock") {
      $("#status").text("Bot chose " + botHand +", you tied");
    } else if(botHand === "paper") {
      $("#status").text("Bot chose " + botHand +", you lose");
      botScore = botScore + 1;
      parseFloat($('#computerScore').text(botScore));
    } else if(botHand === "scissor") {
      $("#status").text("Bot chose " + botHand +", you win");
      playerScore = playerScore + 1;
      parseFloat($('#humanScore').text(playerScore));
      $('.star').addClass('slide');
    };
  }

$('#paper').click(shootPaper)
  function shootPaper() {
    var botHand = botPlay[Math.floor(Math.random()*botPlay.length)];
    if (botHand === "paper") {
      $("#status").text("Bot chose " + botHand +", you tied");
    } else if(botHand === "scissor") {
      $("#status").text("Bot chose " + botHand +", you lose");
      botScore = botScore + 1;
      parseFloat($('#computerScore').text(botScore));
    } else if(botHand === "rock") {
      $("#status").text("Bot chose " + botHand +", you win");
      playerScore = playerScore + 1;
      parseFloat($('#humanScore').text(playerScore));
    };
  }

$('#scissors').click(shootScissor)
  function shootScissor() {
    var botHand = botPlay[Math.floor(Math.random()*botPlay.length)];
    if (botHand === "scissor") {
      $("#status").text("Bot chose " + botHand +", you tied");
    } else if(botHand === "rock") {
      $("#status").text("Bot chose " + botHand +", you lose");
      botScore = botScore + 1;
      parseFloat($('#computerScore').text(botScore));
    } else if(botHand === "paper") {
      $("#status").text("Bot chose " + botHand +", you win");
      playerScore = playerScore + 1;
      parseFloat($('#humanScore').text(playerScore));
    };
  }




});


