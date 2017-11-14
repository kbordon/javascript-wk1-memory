(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Game() {
  this.cards = [];
  // insert code here
}

// function Card(id, value) {
//   this.id = id;
//   this.value = value;
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


exports.memoryModule = Game;

},{}],2:[function(require,module,exports){
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

},{"./../js/memory.js":1}]},{},[2]);
