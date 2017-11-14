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
