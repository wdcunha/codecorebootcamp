// Objects and Prototypes

// Demo: ArrayExtras
function first (arr) {
  return arr[0];
}

const ArrayExtras = {
  last: function(arr){
    return arr[arr.length -1];
  },
  first: first,
  take (qty, arr) {
    return arr.slice(0, qty);
  },
  drop (qty, arr) {
    return arr.slice(qty);
  }
}

// usage:
const yourArr = [1,2,3];
ArrayExtras.last(yourArr);
ArrayExtras.first(yourArr);
ArrayExtras.take(2, yourArr); // returns [1,2]
ArrayExtras.drop(2, yourArr); // returns [3]


// Keyword `this`

console.log("in script scope:", this); // returns the global `window` object

const can = {
  taloupe: "Wat!?",
  touchThis() {return this}
}

can.touchThis() // returns 'can'


// `this` is dynamic. It will be the object at the time the method is called. it is not determined by when and where it was created
const cant = {
  erbury: "Carrot!",
  touchThis: can.touchThis
}

cant.touchThis(); // will return 'cant'


const outsideTouchThis = can.touchThis
// the function `can.touchThis` has been assigned to a variable; therefore, it is no longer owned by `can`, meaning that `this` can not be `can`. In this case, `this` will be `window`. In most situations (with some exceptions), `this` inside a function by itself is usually the `window` or `global` object


// COUNTER EXERCISE

const myCounter = {
  count: 0,
  steps: 1,
  reset () {
    this.count = 0;
    this.step = 1;
    return this;
  },
  setStep(num) {
    this.step = num;
    return this;
  },
  set(num){
    this.count = num;
    return this;
  },
  inc() {
    return this.count += this.step;
  },
  dec () {
    return this.count -= this.step;
  },
  now () {
    return this.count;
  }
}
