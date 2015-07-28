var Player = require('./../src/player');

describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player();
  });

  it("should have an empty hand", function() {
    var input = player.hand;
    expect(input).toEqual([]);
  });
});
