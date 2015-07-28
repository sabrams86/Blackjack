var Deck = require('./../src/deck');

describe("Deck", function() {
  var deck;

  beforeEach(function() {
    deck = new Deck();
  });
  describe('Initial Deck', function () {
    it("should have 52 cards", function() {
      var input = deck.deck;
      expect(input.length).toEqual(52);
    });
    it("should have an empty discard pile", function () {
      var input = deck;
      expect(input.discardPile).toEqual([]);
    })
  })


});
