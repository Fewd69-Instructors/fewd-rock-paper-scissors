  $(function(){

 var you = 0
 var bot = 0
  
  function shuffle () {
  var computer = ["rock.", "paper.", "scissor."];
  var randomItem = computer[Math.floor(Math.random() * computer.length)];
  return randomItem;
  } 

 function displayResult (personHandle, computerHandle, text){ 
 	$("#item").text(personHandle);
 		$("#botItem").text(computerHandle);
 		$("#result").text(text);
 		$("#status").show();
 }

	 $("#status").hide();

	  $("#rock").click(function(){
	 	var computerHandle = shuffle(); 	
	 	if (computerHandle === "rock.") {
	 		displayResult("rock.", computerHandle, "tied :|") 		
	 	} else if (computerHandle === "scissor.") {
	 		displayResult("rock.", computerHandle, "win :)")
	 		you += 1;
	 		$("#humanScore").text(you);
	 	} else {
	 		displayResult ("rock.", computerHandle, "lose :(")
	 		bot += 1;
	 		$("#computerScore").text(bot);

	 	}

	 });

	$("#scissors").click(function(){
	 	var computerHandle = shuffle();
	 	if (computerHandle === "rock.") {
	 		displayResult("scissor.", computerHandle, "lose :(")
	 		bot += 1;
	 		$("#computerScore").text(bot);
	 	} else if (computerHandle === "scissor.") {
	 		displayResult("scissor.", computerHandle, "tied :|")
	 	} else {
	 		displayResult ("scissor.", computerHandle, "win :)"); 
	 		you += 1;
	 		$("#humanScore").text(you);
	 	}
	});

	$("#paper").click(function(){
	 	var computerHandle = shuffle();
	 	if (computerHandle === "scissor.") {
	 		displayResult("paper.", computerHandle, "lose :(")
	 		bot += 1;
	 		$("#computerScore").text(bot);
	 	} else if (computerHandle === "paper.") {
	 		displayResult("paper.", computerHandle, "tied :|")
	 	} else {
	 		displayResult ("paper.", computerHandle, "win :)"); 
	 		you += 1;
	 		$("#humanScore").text(you);
	 	}
	 });

});