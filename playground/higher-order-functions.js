// function one(name, location){
//   console.log(name, location);
// }
//
// function two(){
//     console.log('Args', arguments);
//     one.apply(undefined, ['Jen', 'San Fran']);
// }
//
// two('George', 'El Salvador');


var add = (a, b) => a + b;

// square - take one number and return square Result
var square = (a) => a * a;

var callAndLog = (func) => {
  return function(){
    var res = func.apply(undefined, arguments);
    console.log('Result is ' + res);
    return res;
  };
};

// console.log(add(99, 1));
//
// var addAndLog = callAndLog(add);
// console.log(addAndLog(44, -3));


// Create squareAndLog
var squareAndLog = callAndLog(square);

// Call squareAndLog with 3
squareAndLog(3);
