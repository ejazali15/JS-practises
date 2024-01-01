// *********************** JS Exercise 03 *******************

/*
write a program to calculate the factorial of a number using reduce and for loops
*/
console.log(
  "****************************** Calculate your factorial ******************************"
);
let User = prompt("Enter the number");

let arr = [];

for (let i = 1; i <= User; i++) {
  arr[i - 1] = i;
}
console.log(arr);
try {
  let newarr = arr.reduce((pre, crrnt) => {
    return pre * crrnt;
  });
  alert(newarr);
} catch (error) {
  alert(" Something went wrong........... and your error is : " + error);
}
