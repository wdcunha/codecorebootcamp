// Constructors

// Use `instanceof` to check if an Object is an instance of a constructor or descendent of such

// usage:
[] instanceof Array // returns true
[] instanceof Object // returns true
[] instanceof Doggo // returns false
"a" instanceof Array // returns false

// to get the prototype of an object, use `Object.getPrototypeOf()`
// usage:
Object.getPrototypeOf([]) // gets the Array prototype

function Doggo (name, age) {
  // When function is called as a constructor, `this` will be initialized to {} instead of `window` or whatever object it may belong to.
  this.name = name;
  this.age = age;
  // When called as a constructor, the return statement will be ignored and `this` will be returned instead
  return "Hi";
};

// if we want a property that is shared for the constructor, we define it as a property of the constructor itself. This is the closest pattern that we have to emulate a class variable.
Doggo.myClassProperty = "Not really a class property, but kind of.."

// Javascript implements inheritance using prototypes. When an object is constructed, it is assigned a prototype. We give properties to that prototype object with the `.prototype` property available on any constructor as shown below:

Doggo.prototype.bark = function () {
  return `${this.name} says ${['bork', 'bark', 'woof'][Math.floor(Math.random()*3)]}`;
}

// When accessing a property on an object, Javascript will first look at the object itself. If it can't find it there, it will look in the object's prototype. If it can't find it there, it will look in the object's prototype's prototype. It'll do this recursively until it reaches the root prototype, Object.prototype.

// usage:
// to call function as constructor, prefix it with `new`
new Doggo("Winter",4); // returns Doggo {name: "Winter", age: 4};


function DoggoFighter (name, age, specialAbility) {
  // this.name = name;
  // this.age = age;
  // this.specialAbility = specialAbility;

  // this below is the equivalent shortcut for the lines above
  Object.assign(this, {name, age, specialAbility});
};

// Strange but true! To achieve prototype inheritance, we have to initialize DoggoFighter's prototype as an instance of the constructor whose prototype we want ot inherit. In this case, that's instance of Doggo.
DoggoFighter.prototype = new Doggo()

DoggoFighter.prototype.fight = function(doggo){
  return `${[doggo.name, this.name][Math.floor(Math.random()*2)]} won!`;
}

bobTheSlob = new Doggo('Bob The Slob', 6);
moneyBagsMichael = new DoggoFighter('Money Bags Michael', 10, 'Make it rain!')


class DoggoFighter extends Doggo {
  
}
