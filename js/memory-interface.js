var Game = require('./../js/memory.js').memoryModule;

$(document).ready(function() {
  var newGame = new Game();

  $("button").click(function(event){
    newGame.setupGame();
    for (var i = 0; i < 10; i++) {
        $(".board").append("<div class='card'>" +
        "<div class='front '>" +
        "<span class='value'>" + newGame.cards[i] + "</span>" +
        "</div>" +
        "<div class='back'>" +
        "</div>" +
        "</div>"
      );
    }
    $(".card").each(function(){
      $(this).click(function() {
        console.log("you clicked!");
        $(this).find(".back").hide();
        $(this).find(".value").show();
      });
    });
  });


});
