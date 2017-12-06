// read is a built in Node.js library that helps us take input from the user we use "require" in Node.js to import files we've written or to import libraries (also called modules) from Node.js whether they are built-in with Node.js or are third-party
const readline = require('readline');
// to take input from the user we need to create an interface with readline and tell it where to get the input from and where to put the output. we have access in all Node.js applications to a global object called 'process' which gives us access to things related to the runnin process. when we're running the Node.js application in terminal then stdin and stdout is just taking input and giving output through the terminal (CLI)
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
interface.question('How are you today?', function(answer){
  console.log(`you answered: ${answer}`);
  process.exit(); // this will exit the Node.js program
});
