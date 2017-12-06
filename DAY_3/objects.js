// Count Character

myString = "hello";
function countChars(string) {
    let count = {};
    for (let i=0; i<string.length;i++) {
        let character = string.charAt(i);
        if (count[character]) {
           count[character]++;
        } else {
           count[character] = 1;
        }
    }
    return count;
};
countChars(myString);

// readline version
const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question('Give ma sentence: ', function(sentence){
  console.log(countChars(sentence));
  process.exit();
});


function countChars(string) {
  const arr = string.split('');
  const result = {};
  for(let char of arr) {
    const loChar = char.toLowerCase();
    if(result[loChar] > 0) {
      result[loChar] += 1;
    } else {
      result[loChar] = 1;
    }
  }
  return result;
}
