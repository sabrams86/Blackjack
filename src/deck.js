var standardDeck = [
  //spades
  {card: ["🂡"], value: 11 },
  {card: ["🂮"], value: 10 },
  {card: ["🂭"], value: 10 },
  {card: ["🂫"], value: 10 },
  {card: ["🂪"], value: 10 },
  {card: ["🂩"], value: 9 },
  {card: ["🂨"], value: 8 },
  {card: ["🂧"], value: 7 },
  {card: ["🂦"], value: 6 },
  {card: ["🂥"], value: 5 },
  {card: ["🂤"], value: 4 },
  {card: ["🂣"], value: 3 },
  {card: ["🂢"], value: 2 },
  //hearts//
  {card: ["🂡"], value: 11 },
  {card: ["🂾"], value: 10 },
  {card: ["🂽"], value: 10 },
  {card: ["🂻"], value: 10 },
  {card: ["🂺"], value: 10 },
  {card: ["🂹"], value: 9 },
  {card: ["🂸"], value: 8 },
  {card: ["🂷"], value: 7 },
  {card: ["🂶"], value: 6 },
  {card: ["🂵"], value: 5 },
  {card: ["🂴"], value: 4 },
  {card: ["🂳"], value: 3 },
  {card: ["🂲"], value: 2 },
  //clubs
  {card: ["🃑"], value: 11 },
  {card: ["🃞"], value: 10 },
  {card: ["🃝"], value: 10 },
  {card: ["🃛"], value: 10 },
  {card: ["🃚"], value: 10 },
  {card: ["🃙"], value: 9 },
  {card: ["🃘"], value: 8 },
  {card: ["🃗"], value: 7 },
  {card: ["🃖"], value: 6 },
  {card: ["🃕"], value: 5 },
  {card: ["🃔"], value: 4 },
  {card: ["🃓"], value: 3 },
  {card: ["🃒"], value: 2 },
  //diamonds
  {card: ["🃁"], value: 11 },
  {card: ["🃎"], value: 10 },
  {card: ["🃍"], value: 10 },
  {card: ["🃋"], value: 10 },
  {card: ["🃊"], value: 10 },
  {card: ["🃉"], value: 9 },
  {card: ["🃈"], value: 8 },
  {card: ["🃇"], value: 7 },
  {card: ["🃆"], value: 6 },
  {card: ["🃅"], value: 5 },
  {card: ["🃄"], value: 4 },
  {card: ["🃃"], value: 3 },
  {card: ["🃂"], value: 2 },
];

var Deck = function () {
  this.deck = standardDeck;
  this.discardPile = [];
}
Deck.prototype.shuffle = function () {

}

module.exports = Deck;
