/*
    Create fualty calculator using JavaScript 
    This fualty calculator does following:
    1. It takes two number as input from the user
    2. It performs wrong operation as follows:
    It performs wrong operation 10% of the times
    + --> -
    * --> +
    - --> /
    / --> **
*/

let FirstNumber = prompt("Enter the first number");
let operation = prompt("Enter the operator");
let SecondNum = prompt("Enter the Second Number");

let operators = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};
let random = Math.floor(Math.random() * 100);

if (random > 10) {
  // performs correct operation
  alert(`The value is : ${eval(`${FirstNumber} ${operation} ${SecondNum}`)}`);
} else {
  operation = operators[operation];
  alert(`The value is : ${eval(`${FirstNumber} ${operation} ${SecondNum}`)}`);
}
console.log(random);
