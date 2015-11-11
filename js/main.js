$ (function () {

  var moves = ['rock', "paper", "scissors"];
  var score = 0;
  var botScore = 0;

  $('#rock').click(rockCompare);
  $('#paper').click(paperCompare);
  $('#scissors').click(scissorsCompare);

    function rockCompare () {
      var myMove = moves[0];
      var botMove = moves[Math.floor(Math.random()*moves.length)];

      $ ('#status').text("You played " + myMove +". The bot played " + botMove);

      if (botMove === myMove){
        tieMove ();
      }

      if (myMove === "rock" && botMove == "scissors") {
        
        winMove ();
    
      } else if (myMove === "rock" && botMove == "paper") {
        
        badMove ();
        
      }
    }

    function paperCompare () {
      var myMove = moves[1];
      var botMove = moves[Math.floor(Math.random()*moves.length)];

      $ ('#status').text("You played " + myMove +".The bot played " + botMove);


      if (botMove === myMove){
        tieMove ();
      }

      if (myMove === "paper" && botMove == "rock") {
        winMove ();
        
      } else if (myMove === "paper" && botMove == "scissors") {
        
        badMove ();
      }
    }

    function scissorsCompare () {
        var myMove = moves[2];
        var botMove = moves[Math.floor(Math.random()*moves.length)];

        $ ('#status').text("You played " + myMove +".The bot played " + botMove);


        if (botMove === myMove){
          tieMove ();
        }

        if (myMove === "scissors" && botMove == "paper") {
          winMove();
        } else if (myMove === "scissors" && botMove == "rock") {
          badMove();
        }
      }

    function tieMove() {
      $('#status2').text('You tied');
    }

    function winMove (){
      score = score +1;
      $('#status2').text('You win');
      $ ('#humanScore').text(score);
    }

    function badMove () {
      botScore = botScore +1;
      $('#computerScore').text(botScore);
      $('#status2').text("You lose");
    }
});
