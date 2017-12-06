StringExtras = {
  repeat(string, n) {
    result = "";
    for (let x = 0; x < n; x++) {
      result += string;
    }
    return result;
  },
  leftPad(string, n) {
    for (let x = 0; x < n; x++) {
      string = " ".concat(string);
    }
    return string;
  },
  rightPad(string,n) {
    for (let x = 0; x < n; x++) {
      string = string.concat(" ");
    }
    return string;
  },
  pad(string, n) {
    for (let x = 0; x < n; x++) {
      string = " ".concat(string) + " ";
    }
    return string;
  },
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}




// VECTOR LAB
// Constructor and Prototype
let v1 = new Vector(4,4,0);
let v2 = new Vector(1,2,2);

// console.dir(v1);

function Vector(x,y,z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

Vector.prototype.plus = function (vec) {
  return new Vector(this.x + vec.x, this.y + vec.y, this.z + vec.z);
}
Vector.prototype.minus = function (vec) {
  return new Vector(this.x - vec.x, this.y - vec.y, this.z - vec.z);
}
Vector.prototype.magnitude = function () {
  return ((this.x**2)+(this.y**2)+(this.z**2))**(0.5);
}

// class
class Vector {
  constructor (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  plus (vec) {
    return new Vector(this.x + vec.x, this.y + vec.y, this.z + vec.z);
  }
  minus (vec) {
    return new Vector(this.x - vec.x, this.y - vec.y, this.z - vec.z);
  }
  magnitude (){
    return ((this.x**2)+(this.y**2)+(this.z**2))**(0.5);
  }
}

let v1 = new Vector(4,4,0);
let v2 = new Vector(1,2,2);


console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(v1.magnitude());

// ALPHABET ENCODER & DECODER

let abc1 = "abcdefghijklmnopqrstuvwxyz";
let abc2 = "etaoinshrdlucmfwypvbgkjqxz";


function Cipher(abc1,abc2) {
  this.abc1 = abc1.split("");
  this.abc2 = abc2.split("");
}

Cipher.prototype.encode = function (string) {
  obj1 = {};
  obj2 = {};
  codeString = string.split("");
  result = "";
  for(let x=0; x<this.abc1.length; x++) {
    obj1[x] = this.abc1[x];
  }
  for(let x=0; x<this.abc2.length; x++) {
    obj2[x] = this.abc2[x];
  }
  for(let letters of codeString) {
    for(let x=0; x<this.abc1.length; x++) {
      if(obj1[x] === letters) {
        result = result + obj2[x];
      }
    }
  }
  return result;
}

Cipher.prototype.decode = function (string) {
  obj1 = {};
  obj2 = {};
  codeString = string.split("");
  result = "";
  for(let x=0; x<this.abc2.length; x++) {
    obj1[x] = this.abc2[x];
  }
  for(let x=0; x<this.abc1.length; x++) {
    obj2[x] = this.abc1[x];
  }
  for(let letters of codeString) {
    for(let x=0; x<this.abc2.length; x++) {
      if(obj1[x] === letters) {
        result = result + obj2[x];
      }
    }
  }
  return result;
}

sub = new Cipher(abc1,abc2);
sub.encode("aeiou");
sub.decode("eta");


// EUGENE Cipher

function SubstitutionCipher(original, encoded){
  this.original = original;
  this.encoded = encoded;
}

SubstitutionCipher.prototype.encode = function(string){
  let coded = '';
  for (i=0; i<string.length; i++){
    coded += this.encoded[this.original.indexOf(string[i])];
  }
  return coded;
}

SubstitutionCipher.prototype.decode = function(string){
  let decoded = '';
  for (i=0; i<string.length; i++){
    decoded += this.original[this.encoded.indexOf(string[i])];
  }
  return decoded;
}

let abc1 = "abcdefghijklmnopqrstuvwxyz";
let abc2 = "etaoinshrdlucmfwypvbgkjqxz";

const sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode("abc")) // => "eta"
console.log(sub.encode("xyz")) // => "qxz"
console.log(sub.encode("aeiou")) // => "eirfg"

console.log(sub.decode("eta")) // => "abc"
console.log(sub.decode("qxz")) // => "xyz"
console.log(sub.decode("eirfg")) // => "aeiou"
