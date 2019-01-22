console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');

var cardOne = cards[0];
var cardTwo = cards[1];

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}else {alert("Sorry,try again");}


console.log("User flipped queen")
console.log("User flipped king")
