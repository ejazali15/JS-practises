/*
 ********************** Functions in JavaScript ********************************

 function is a set of or block of code which is created to call any where of code to excute.We use lots of function in JS while making projects 
 Function look like this

 function abc(){
    //Code to excute
 }
 */
// example

function addNum() {
  console.log(1 + 2);
}
//If you want to excute this function you have to call it first

addNum();

//argument in function

/*
Argument in function is used to pass any data to the function to excute 
*/

//for example

function add_num(first, second) {
  return first + second; //return keyword is used to return the line of code or some values
}
//In the bracket the first and second are used as variable this variables are block scope
console.log(add_num(2, 3)); //This will print 5
// arrow function

//arrow function look like this
//()=>{}

//example

let arrow = () => {
  //this is the function store in a variable it is mostly used in react js library
};
