// CARD SHUFFLER

let val = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
let suits = ["S","H","D","C"];

let deck = suits.map(function(x){
  let mydeck = [];
  for(let i=0;i<val.length;i++){
    mydeck.push(val[i] + x);
  }
  return mydeck.join(",");
})

const CardDeck = {
  deck,
  printCard () {
    for(let cards of this.deck) {
      console.log(cards);
    }
  },
  shuffle () {
    this.deck = this.deck.join(",").split(",");
    return this.deck.sort(function(){
      return Math.random() - 0.5
    })
  },
};

CardDeck.printCard();
CardDeck.shuffle();


// CHALLENGE: NESTED Objects

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

// gets value of `name` in value of `person` in `obj`
obj.getByPath('person.name'); // 'joe'

// gets value of `bio` in value of `history` in value of `person` in `obj`
obj.getByPath('person.history.bio'); // { funFact: 'I like fishing.' }

//  `homeStreet` doesn't exist, then return `undefined`
obj.getByPath('person.history.homeStreet'); // undefined

// `animal` doesn't exist, then return `undefined`
obj.getByPath('person.animal.pet.needNoseAntEater'); // undefined



obj.prototype.getByPath(string) {
  let stringInfo = string.split(".");
  if(obj[stringInfo[0]][stringInfo[1]]){
    console.log(obj[stringInfo[0]][stringInfo[1]]);
  }
}
