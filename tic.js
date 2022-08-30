  var playerTurn;
  var counter = 1;
  var startingArray = [$("#boxOne").text(), $("#boxTwo").val(), $("#boxThree").val(), $("#boxFour").val(), $("#boxFive").val(), $("#boxSix").val(), $("#boxSeven").val(), $("#boxEight").val(), $("#boxNine").val()];
$(document).ready(function(){
  var player1;
  var player2;
  $("#userInputButton").on("click", function(){
    player1 = $("#user1").val();
    player2 = $("#user2").val();
    $("form").remove();
  });
  $(".GameBoardStyle").on("click", function() {
    if (counter % 2 == 1) {
      playerTurn = "x";
      counter++;
    } else {
      playerTurn = "o";
      counter++;
    }
    $(this).text(playerTurn);
    console.log(playerTurn, counter);
  });
});
