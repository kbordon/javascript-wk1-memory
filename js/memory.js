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
