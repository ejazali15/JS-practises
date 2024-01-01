/*
******************** String in JavaScript ***************************

String is used to store multiple characters and also use to manuplicate text
String is rap in single quote or double qoute
*/
// lets create string

let string = "Hello How are you"; // string has been created
console.log(string.length); //.length property is ues to count the length

//String Method and properties

console.log(string.toUpperCase()); //.toUpperCase is used to capitilize the character
console.log(string.toLowerCase()); //.toLowerCase is used to make the character small
console.log(string.slice(2, 6)); //print (2 to 6) 6 index is not include
console.log(string.replace("Hello", "Hi,")); //Here "Hello is replace by "Hi,"
console.log(string.trim()); // used to remove whitespaces
console.log(string[0]); //use to access 0 index
console.log(string.startsWith("Hello")); //use to see the string is start with "Hello" or not
console.log(string.endsWith("you")); //use to see the string is end with "you" or not
console.log(string.includes("H")); //use to search "H" in the string
console.log(string.concat("Ejaz", 9));
//Loop over string

for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}

//Solve the Questions

//First Question:write a program to covert the string into lowercase

let str = "Hello";
console.log(str.toLocaleLowerCase());

//Second Question:Extract the amout from "Amount is RS 1900"
let amount = "Amount is RS 1900";
console.log(amount.slice(13));
