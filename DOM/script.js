/*
 ************* DOM in JavaScript *******************
 DOM represent the page content as HTML
 DOM is a tree like structure
 DOM is use to target the element of HTML from JavaScript
 */
//We can access the node of DOM by:
let body = document.body; //document is a special object which is located in the browser
let head = document.head;
console.log(body);
console.log(head);
//We can style the body like this

body.style.backgroundColor = "red";

//We use childNode method to access any childnode

//If I write document.body.childNode It return me an array

//Selecting the dom
//we can select the DOM using this methods:
/*
document.getElementById("name of Id")
document.getElementByClassName("name of class")
document.getElementByTagName("tag name")
document.getElementByName("name")
document.querySelector("use css selector(#main,.main h1)")
document.querySelectorAll("use css selector(div,p,h1 ,#main)")
*/
