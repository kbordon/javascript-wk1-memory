var Game = require('./../js/memory.js').gameModule;


$(document).ready(function() {
  var newGame = new Game();

  $(".test").click(function() {
    alert("this is test.");
    $(".test").removeClass("test");
  });

  $("button").click(function(){
    newGame.setupGame();
    for (var i = 0; i < 10; i++) {
        $(".board").append("<div class='card active'>" +
        "<div class='front '>" +
        "<span class='id'>" + (i + 1) + "</span>" +
        "<span class='value'>" + newGame.cards[i] + "</span>" +
        "</div>" +
        "<div class='back'>" +
        "</div>" +
        "</div>"
      );
    }
    $(".active").each(function() {
        $(this).click(function() {
        $(this).addClass("selected");
        $(this).find(".value").show();
        var number = parseInt($(this).find(".value").html());
        var id = parseInt($(this).find(".id").html());
        if (newGame.hasFirstCard(number, id)) {
          var matchMade = newGame.checkPair(number, id);
          if (matchMade === true) {
            $(".selected").removeClass("active selected").off('click');
          } else {
            $(".selected.active").find(".value").fadeOut(1000);
            $(".selected").removeClass("selected");
          }
        }
      });

    });
  });
});
