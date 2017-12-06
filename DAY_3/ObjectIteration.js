const info = {firstName: 'Tam', lastName: 'Kbeili', programmingLanguages: ['Javascript', 'Ruby']};

for(let key in info) {
  console.log(`The key is ${key}, the value is ${info[key]}`);
}


// CLONING AN object

function clone(obj){
  const result = {};
  for(let key in obj){
    result[key] = obj[key];
  }
  return result;
}
const myObj = {a:1, b:2};
const cloneObj = clone(myObj);

console.log(myObj);
console.log(clonedObj);
