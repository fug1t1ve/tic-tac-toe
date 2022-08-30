// Counter & Play turns

var playerTurn;
var counter = 1;

$(".centerText").on("click",function() {
  if (counter % 2 == 1) {
    playerTurn = "x";
    return counter++;
  } else {
    playerTurn = "o";
    return counter++;
  }
    console.log(playerTurn, counter);
});

// Winning arrays

var startingArray = [$("#boxOne").text(), $("#boxTwo").val(), $("#boxThree").val(), $("#boxFour").val(), $("#boxFive").val(), $("#boxSix").val(), $("#boxSeven").val(), $("#boxEight").val(), $("#boxNine").val()];
