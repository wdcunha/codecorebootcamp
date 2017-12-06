function testScope(){
  if (true) {
    let a = 10;
    const b = 'hello';
  }
  console.log(a);
  console.log(b);
}
testScope();

// result is a and b are undefined since they are only scoped within the { }

function testScope(){
  if (true) {
    var a = 10;
    var b = 'hello';
  }
  console.log(a);
  console.log(b);
}
testScope();

// var will scope up to the closest function


function testShadow(){
  const a = 5;
  if(true){
    const a = 10;
    console.log(a);
  }
  console.log(a);
}
testShadow();

// will print out 10 and 5 since a = 10 only lives within the { } and does not interfere with outer a
