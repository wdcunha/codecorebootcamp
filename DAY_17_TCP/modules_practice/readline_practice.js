const readline = require('readline');

const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rlInterface.question('What is your name?', (name) => {
  console.log(`Hello ${name}`);
  process.exit();
})
