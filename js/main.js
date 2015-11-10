$(function(){

  var computerChoice = null,
        userChoice = null;
  var humanScore = 0;
  var computerScore = 0;

  var newComputerChoice = function () {
      computerChoice = Math.random();
      if (computerChoice < .33) {
          computerChoice = "rock";
      } else if (computerChoice < .66) {
          computerChoice = "paper";
      } else {
          computerChoice = "scissors";
      };
      console.log('pc choice: ', computerChoice);
  };

  $("#rock").click(function(){
    userChoice = "rock";
    console.log('user choice ',userChoice);
    newComputerChoice();
    decision();
    textUpdate();
  });

  $("#scissors").click(function(){
    userChoice = "scissors";
    console.log('user choice ',userChoice);
    newComputerChoice();
    decision();
    textUpdate();
  });

  $("#paper").click(function(){
    userChoice = "paper";
    console.log('user choice ',userChoice);
    newComputerChoice();
    decision();
    textUpdate();
  });


  function decision () {
    if (userChoice === computerChoice){
      console.log('tie!');
      $("#humanScore").text(humanScore);
      $("#computerScore").text(computerScore);
      $('#results').text('You tie. :/');

      
    } else if (userChoice === 'rock'){

      switch(computerChoice) {
        case 'paper':
          computerScore += 1;
          $("#humanScore").text(humanScore);
          $("#computerScore").text(computerScore);
          $('#results').text('You lose. :(');
          break;
        case 'scissors':
           humanScore += 1;
          $("#humanScore").text(humanScore);
          $("#computerScore").text(computerScore);
          $('#results').text('You win. :)');
          break;
      }
      
    } else if (userChoice === 'scissors'){

      switch(computerChoice) {
        case 'paper':
          humanScore += 1;
          $("#humanScore").text(humanScore);
          $("#computerScore").text(computerScore);
          $('#results').text('You win. :)');
          break;
        case 'rock':
           computerScore += 1;
          $("#humanScore").text(humanScore);
          $("#computerScore").text(computerScore);
          $('#results').text('You lose. :(');
          break;
      }

    } else if (userChoice === 'paper'){

      switch(computerChoice) {
        case 'scissors':
          computerScore += 1;
          $("#humanScore").text(humanScore);
          $("#computerScore").text(computerScore);
          $('#results').text('You lose. :(');
          break;
        case 'rock':
           humanScore += 1;
          $("#humanScore").text(humanScore);
          $("#computerScore").text(computerScore);
          $('#results').text('You win. :)');
          break;
      }
    }
  }

  function textUpdate() {
    $('#status').html('You played ' + '<u>' + userChoice + '</u>' + '. ' + 'Computer played ' + '<u>' + computerChoice + '</u>' + '. ');
   } 

});
