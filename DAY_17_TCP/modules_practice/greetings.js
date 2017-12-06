function sayHi(name) {
  return `Hello ${name}`;
}

function sayBye(name) {
  return `Bye ${name}`;
}

// if you want to package different elements in this file as a node.js module, then you need to set what `module.exports` is equal to. This can be any Javascript value, function or object
module.exports = {sayHi: sayHi, sayBye: sayBye};
// in ES6 this can be shortened to
module.exports = {sayHi, sayBye};
