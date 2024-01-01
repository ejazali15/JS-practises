/*
******************************* Events in JS *******************************

events play very important role in JavaScript DOM manuplication there are many events but web discuss some important events in JavaScript
mouse events : click,context menu, mouseover / mousedown /mouseenter, mouseleave mousemove

keyborad event: keyup,keydown
form event: submit,focus etc 

explore this events on https://mozilla.org
we can also use this events as arrtribute in html
*/
//Now we target on a button

let element = document.querySelector("#element");
//addEventListener is a special method to listen the events

//Click Events
// element.addEventListener("click", () => {
//   alert("Hello world ");
// });

//Mouse Enter event
// element.addEventListener("mouseenter", () => {
//   alert("Mouse Has been Enter");
// });

//explore other event by yourself

//now we talk about setimeout and setinterval

// setTimeout is use for performing function one time after some milli seconds

//example

setTimeout(() => {
  console.log("I am setimeout");
}, 30000);

//setinterval is use to perform function after some milli second the function always perform after the delay
setInterval(() => {
  alert("I am interval");
}, 3000);
