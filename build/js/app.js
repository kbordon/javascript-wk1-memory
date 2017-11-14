(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Game() {
  this.cards = [];
  this.inactive = [];
  this.chosenValue = 0;
  this.chosenId = 0;
  // insert code here
}

// function Card(id, value) {
//   this.id = id;
//   this.value = value;
//   this.matched = false;
// }

Game.prototype.setupGame = function() {
  var values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
  values.sort(function(a, b) {
    return 0.5 - Math.random();
  });
  for (var i = 0; i < 10; i++) {
    this.cards.push(values[i]);
  }
};

Game.prototype.hasFirstCard = function(value, id) {
  if (this.chosenValue === 0) {
    this.chosenValue = value;
    this.chosenId = id;
    return false;
  } else
  {
    return true;
  }
};

Game.prototype.checkPair = function(value, id) {
  if (this.chosenValue === value && this.chosenId != id)
  {
    this.chosenValue = 0;
    this.chosenId = 0;
    return true;
  }
  else {
    this.chosenValue = 0;
    this.chosenId = 0;
    return false;
  }
};


exports.gameModule = Game;

},{}],2:[function(require,module,exports){
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

},{"./../js/memory.js":1}]},{},[2]);
