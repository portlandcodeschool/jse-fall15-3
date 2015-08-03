
var cardTools={

	rank: function (card) { // --> 1..13
    	return Math.floor(card/4)+1;
		},
 
	suit: function (card) { // --> 1..4
	    return (card%4)+1;
	},

	cardID: function (rank,suit) { // --> 0..51
	    return (rank-1)*4 + (suit-1);
	},

	color: function (card) { // -->"red,"black"
	    return (this.suit(card) < 3)? "red": "black";
	},
	name: function(card) {
    return this.rankNames[this.rank(card)]+' of '+ this.suitNames[this.suit(card)];
	},

	rankNames: ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                'Jack','Queen','King'],
	suitNames: ['','Hearts','Diamonds','Spade','Clubs']
 	
};


console.log(cardTools.rank(2));
console.log(cardTools.suit(1));
console.log(cardTools.cardID(11,3));
console.log(cardTools.color(2));
console.log(cardTools.name(11));