/*

***************************** Array in JS ****************************
Array are the variable use to store different data types
*/
//Array are created like this
console.log(
  "***************************** Array in JS ****************************"
);
console.log("Array are the variable use to store different data types");
let arr = [1, "main", true, false, null]; // array are also variable it contain different data types in it

console.log(arr);

//I can access the length of arr by using length method
console.log(arr.length);
//I can also access the index value of array

console.log(arr[1]);

//we can change the values also

arr[0] = "I has been changed";
console.log(arr);

//Array Properties and Methods
/*
1. toString:
    toString method is use to covert array into string of a comma seprated values

2. join:
    join is use to join all the element with given symbol , string or any thing
    
3.pop:
    pop method is use to remove last element from the array

4. push:
    push method is use to push element on the last of array   
    
5. shift:
    shift method is used to remove first element from the array

6. unShift:
    unShift method is used to add element on the first index of array and it return a new array

7. delete:
    delete method is use to delete element from the array    

8. concat:
    concat method is use to join arrays to given array and it return a new array     

9. sort:
    sort method is use to sort element in the array alphabatically   

10. reverse:
    reverse method is use to make the array reverse    
*/
//toString example
console.log(arr.toString());

//join example
console.log(arr.join("-"));

//pop example
arr.pop();
console.log(arr);

//push example
arr.push("I was pushed by push method");
console.log(arr);

//shift example
arr.shift();
console.log(arr);

//unShift example
arr.unshift("Hello");
console.log(arr);

//delete example
delete arr[0];
console.log(arr);

//concat example

let a1 = [1, 2, 3, 4];
let a2 = [5, 6, 7, 8];
let a3 = [9, 10, 11, 12];
let concat = a1.concat(a2, a3);
console.log(concat);
console.log(a1);

//sort method example

let sort1 = [9, 8, 7, 3, 3];
sort1.sort();
console.log(sort1);

//Looping through array

let array = [1, 2, 3, 4, 7];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//for each loop
//for each loop is use to access all the element in the array

arr.forEach((e) => {
  console.log(e);
});

//Map:
//Map is very important concept in JavaSript. It is use to create new array from the original array by performing some function
//example

let a = [1, 2, 3, 4, 5, 6];
let newA = a.map((value) => {
  return value ** 2;
});
console.log(a);
console.log(newA);

//filter:
//  filter is use to filter the array and create new array from the filtered array
//example:
let filter = [1, 2, 3, 4, 5, 9];
let newFilter = filter.filter((value) => {
  return value > 7;
});
console.log(filter);
console.log(newFilter);

//Reduce:
//  Reduces an array to a sigle value
//example:
let b = [1, 2, 3, 5, 6, 7];
let c = b.reduce((a, b) => {
  return a * b;
});
console.log(c);
