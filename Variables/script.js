/*
There are seven premitive data types and also have an object:
- String
- Number
- boolean
- Symbol
- Null
- Undefined
- Bigint
*/
let String = "Hello Harry"; //This sentence is String becuase the String variable contain String data type
let boolean = true; // Boolean has two type 1.true and 2.false
let Symbol = 499 % 4959; //This variable contain Symbol
let Null = null; //This variable contain Null.
let Undefined = undefined; //This variable contain undefined.
// This are premitive data types

//Object is created in JS like this:
//Object contain key pair value
//We use object to store different keys and values

let object = {
  name: "Ejaz",
  State: "Pakistan",
};

//Let solve Questions

//First Question: Create a variable type string and try to add number to it?

// let a = "String";
// console.log(a);
// a = 8;
// console.log(a);

//Second Question: Use typeof method to find the type of variable created in the last question

// console.log(typeof a);

//Third Question:Create a const object Can you change it to hold number later?

// const obj = {};
// let obj2 = (obj.name = "Ejaz");
// let newUser = (obj.Username = "user@google.com");
// console.log(obj);

//Four Question:Write a JS program to create a dictionary of 3 words

let dictionary = {
  love: "emotion",
  life: "set of intruction",
  computer: "machine",
};
console.log(dictionary.love);
console.log(dictionary.life);
console.log(dictionary.computer);
