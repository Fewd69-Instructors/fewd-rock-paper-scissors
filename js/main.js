$(function(){

  var options = ['rock', 'paper', 'scissors']

  var humanscore = 0

  var botscore = 0

  $('#rock').click(rockMove)
  $('#paper').click(paperMove)
  $('#scissors').click(scissorsMove)


  function rockMove(){

      var botChoice = options[Math.floor(options.length * Math.random())]
      // alert(botChoice)

      if (botChoice === 'scissors') {
        //human wins
        humanscore = humanscore + 1;
        $('#humanScore').text(humanscore);
        console.log('human won');
        $('#you').text('rock');
        $('#bot').text(botChoice);
        $('#result').text(' win. :)');
      }

      else if (botChoice === 'paper') {
        // alert ('bot wins')

        botscore = botscore + 1;
        $('#computerScore').text(botscore);
        console.log('bot won');
        $('#you').text('rock');
        $('#bot').text(botChoice);
        $('#result').text(' lose. :(');
      }

      else if (botChoice === 'rock') {

        console.log('tied');
        $('#you').text('rock');
        $('#bot').text(botChoice);
        $('#result').text('tied. :|')
      }
  }

  function paperMove(){

      var botChoice = options[Math.floor(options.length * Math.random())]


      if (botChoice === 'scissors') {
        //human wins
        humanscore = humanscore + 1;
        $('#humanScore').text(humanscore);
        console.log('human won');
        $('#you').text('paper');
        $('#bot').text(botChoice);
        $('#result').text(' lose. :(');
      }

      else if (botChoice === 'rock') {
        // alert ('bot wins')

        botscore = botscore + 1;
        $('#computerScore').text(botscore);
        console.log('bot won');
        $('#you').text('paper');
        $('#bot').text(botChoice);
        $('#result').text(' win. :)');
      }

      else if (botChoice === 'paper') {

        console.log('tied');
        $('#you').text('paper');
        $('#bot').text(botChoice);
        $('#result').text('tied. :|')
      }
  }

  function scissorsMove(){

      var botChoice = options[Math.floor(options.length * Math.random())]

      if (botChoice === 'paper') {
        //human wins
        humanscore = humanscore + 1;
        $('#humanScore').text(humanscore);
        console.log('human won');
        $('#you').text('scissors');
        $('#bot').text(botChoice);
        $('#result').text(' win. :)')
      }

      else if (botChoice === 'rock') {
        // alert ('bot wins')

        botscore = botscore + 1;
        $('#computerScore').text(botscore);
        console.log('bot won');
        $('#you').text('scissors');
        $('#bot').text(botChoice);
        $('#result').text(' lose. :(')
      }

      else if (botChoice === 'scissors') {

        console.log('tied');
        $('#you').text('scissors');
        $('#bot').text(botChoice);
        $('#result').text('tied. :|')
      }
  }

});