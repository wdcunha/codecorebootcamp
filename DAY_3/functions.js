function add(a,b) {
  const result = a+b;
  return result;
}

console.log(add(4,5));
console.log(add(40,15));
console.log(add('Hello','World'));

function increment(x) {
  const num = x+1;
  return num;
}
console.log(increment(5);

function insult(name) {
  const string = "name" + "you doofus!";
  return string
}
console.log(insult(Bob));

function repeat(string, i) {
  let newString = "";
  for(let x=0; x < i; x++) {
    newString += string;
  }
  return newString;
}
repeat("hello",3);
