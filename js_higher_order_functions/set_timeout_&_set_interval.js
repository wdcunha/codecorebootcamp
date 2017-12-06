let a = 1;
console.log('before setTimeout:', a);
setTimeout(() => {
  a += 1
  console.log('after setTimeout:', a)
}, 1000);
console.log('line after setTimeout:', a);



let count = 1;

const intervalId = setInterval(() => {
  console.log(`this callback was called ${count += 1}`)
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 20000);
