// *************************Loop in JavaScript***********************   //

/*
We use loop to repeat our code 
for example if I say to you that print 0 to 10 you can easily print it by console.log but I f I say that print 0 to 100000
then you cannot do it so for this type of work we use loop.
Types of Loop:
- For loop
- For in loop
- For of loop
- While loop
- While-do loop
*/

//For loop example

// for (let i = 0; i <= 1000; i++) {
//   console.log(i); // This will print 0 to 10000
// }
// "for" is a keyword to define the loop
// (let i =0) declear any variable
// (i<=100) it is condition the loop will stop after the condition becomes false

//First Statment in for loop is to create a variable
//Second Statment in for loop is the condition on the bases of which the loop is stop or start
//Third statement in for loop is increament and decreament

//For in loop
// for in loop look like this it is use to loop on a object
let object = {
  name: "abc",
  Salary: 30040,
  Company: "xyz",
  "job code": 2300,
};
for (const key in object) {
  console.log(`${key} ${object[key]}`);
}

// for of loop
let arr = [1, 2, 3, 4, 5, 6, "Hello"];
//for of loop is use to iterate arr and string

//for of loop structure:
for (const iterator of arr) {
  console.log(iterator);
}

// While loop

/*
While loop crack your code incase the condition is never becomes false so use it little

*/
//example

let j = 0;

while (j < 1000) {
  // condition is written in the bracket

  console.log(j); //program to excute

  j++; //increament or decreament
}

// **** do-while loop ****

/*
do while loop is not commonly used in industry so avoid it but I will tell you about it


*/

//Example:

let i = 0; //create a variable
do {
  console.log(i);
  i++;
} while (i < 1000);
// The code always run  once a time weather it becomes false

//First Question:Write a program to print the marks of the student marks = {ejaz:24,Ihtisham:98,Ghulam:90}

//It is so easy

let marks = { ejaz: 24, Ihtisham: 98, Ghulam: 90 };
for (const key in marks) {
  console.log(marks[key]);
}
