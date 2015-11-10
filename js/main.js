$(function(){

  var humanScore = 0;
  var computerScore = 0; 
 
  function shuffle(){
    var computer = ['rock', 'scissors', 'paper'];
    var randomItem = computer[Math.floor(Math.random()*computer.length)];
    return randomItem;
  }

  function displayResult(personHandle,computerHandle,text){
    $('#item').text(personHandle);
    $('#bot_item').text(computerHandle); 
    $('#result').text(text)
    $('#status').show();
  }
  
  $('#status').hide();

  $('#rock').click(function(){
    var computerHandle = shuffle();
    if (computerHandle === 'rock'){
      displayResult($(this).attr('id'), computerHandle, "You Tied :|")
    } else if (computerHandle === 'scissors'){
      humanScore += 1
      $('#humanScore').text(humanScore)
      displayResult($(this).attr('id'), computerHandle, "You Win :)" )
    } else if (computerHandle === 'paper'){
      computerScore += 1
       $('#computerScore').text(computerScore)
      displayResult($(this).attr('id'), computerHandle, "You Lose :(" )
    }

  });

  $('#paper').click(function(){
    var computerHandle = shuffle();
    if (computerHandle === 'paper'){
      displayResult($(this).attr('id'), computerHandle, "You Tied :|")
    } else if (computerHandle === 'scissors'){
      computerScore += 1
      $('#computerScore').text(computerScore)
      displayResult($(this).attr('id'), computerHandle, "You Lose :(" )
    } else if (computerHandle === 'rock'){
      humanScore += 1
       $('#humanScore').text(humanScore)
      displayResult($(this).attr('id'), computerHandle, "You Win :)" )
    }

  });

  $('#scissors').click(function(){
    var computerHandle = shuffle();
    if (computerHandle === 'scissors'){
      displayResult($(this).attr('id'), computerHandle, "You Tied :|")
    } else if (computerHandle === 'rock'){
      computerScore += 1
      $('#computerScore').text(computerScore)
      displayResult($(this).attr('id'), computerHandle, "You Lose :(" )
    } else if (computerHandle === 'paper'){
      humanScore += 1
       $('#humanScore').text(humanScore)
      displayResult('scissors', computerHandle, "You Win :)" )
    }

  });




});