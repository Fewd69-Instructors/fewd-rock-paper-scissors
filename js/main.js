$(function(){

  var computerChoice = null,
      userChoice = null;

  var newComputerChoice = function () {
    computerChoice = Math.random();
    //Change randomly generated number to rock, paper, or scissors
    if (computerChoice < .33) {
        computerChoice = "rock";
    } else if (computerChoice < .66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    };
    console.log('computer choice: ', computerChoice);
  };

  $("#rock").click(function(){
    userChoice = "rock";
    console.log('user choice: ', userChoice);
    newComputerChoice();
    result();
    textUpdate();
  })

  $("#paper").click(function(){
    userChoice = "paper";
    console.log('user choice: ', userChoice);
    newComputerChoice();
    result();
    textUpdate();
  })

  $("#scissors").click(function(){
    userChoice = "scissors";
    console.log('user choice: ', userChoice);
    newComputerChoice();
    result();
    textUpdate();
  })

  var humanScore = 0;
  var computerScore = 0;

  function result () {
    if (userChoice === computerChoice){
      $('#humanScore').text(humanScore);
      $('#computerScore').text(computerScore);
      $('#result').text('You tied. :|');
    } else if (userChoice === 'rock'){

      switch(computerChoice){
        case 'paper':
        computerScore += 1;
        $("#humanScore").text(humanScore);
        $('#computerScore').text(computerScore);
        $('#result').text('You lose. :(');
        break;
        case 'scissors':
        humanScore += 1;
        $("#humanScore").text(humanScore);
        $('#computerScore').text(computerScore);
        $('#result').text('You win! :)');
        break;
      }
    } else if (userChoice=== 'paper'){

      switch(computerChoice){
        case 'scissors':
        computerScore += 1;
        $("#humanScore").text(humanScore);
        $('#computerScore').text(computerScore);
        $('#result').text('You lose. :(');
        break;
        case 'rock':
        humanScore += 1;
        $("#humanScore").text(humanScore);
        $('#computerScore').text(computerScore);
        $('#result').text('You win! :)');
        break;
      }
    } else if (userChoice=== 'scissors'){

      switch(computerChoice){
        case 'paper':
        humanScore += 1;
        $("#humanScore").text(humanScore);
        $('#computerScore').text(computerScore);
        $('#result').text('You win! :)');
        break;
        case 'rock':
        computerScore += 1;
        $("#humanScore").text(humanScore);
        $('#computerScore').text(computerScore);
        $('#result').text('You lose. :(');
        break;
      }
    }
  }

  function textUpdate() {
    $('#status').html('You played ' + '<u>' + userChoice + '</u>' + '. ' + 'Computer played ' + '<u>' + computerChoice + '</u>' + '. ');
  }


});