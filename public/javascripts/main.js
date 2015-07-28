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

var Game = function () {
  this.players = [];
  this.deck = new Deck();
}

var Deck = function () {
  this.set = standardDeck;
}
Deck.prototype.shuffle = function () {

}


var Player = function () {
  this.hand = [];
  this.bet = null;
  this.wallet = 0;
}

var Dealer = function () {
  this.hand = [];
}
