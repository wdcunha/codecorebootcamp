function add(a,b) {
  return a+b;
}

function notNull (obj) {
  return obj !== null;
}

function flip (fn) {
  return function (a,b) {
    return fn(b,a);
  }
}

// to arrow notation

const add = (a,b) => {
  return a+b;
}
// even shorter
const add = (a,b) => a + b;

const notNull = obj => obj !== null;

const flip = fn => {
  return function(a,b) {
    return fn(b,a);
  }
}
// even shorter
const flip = fn => (a,b) => fn(b,a);


// arrow functions' this is scoped to the block it is declared in.
// meaning that it is set when created and can never change

const myObj = {
  a: () => this, // this method returns window
  b: function () {return (() => this)() } // this method returns myObj
}
