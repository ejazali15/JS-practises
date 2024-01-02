/*
************** Object Oreinted programming in JavaScript ********************
oop in JavaScript is use for a complex project not for a normal project
we can make object like this:
*/
let obj = {
  name: "Ejaz",
  class: "Pre nine",
  status: 200,
};
console.log(obj); //it will print a object

//in this object there is a special object called prototype in which it have some method and properties
//we use prototype to perform protyple inheritance try to explore it by your self
//Prototype is a additional property of object
//for example

let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};
//it is true that animal can eats and rabbit is also a animal so I can use the animal property in rabbit by using prototype
rabbit.__proto__ = animal; //I join the animal properties in rabbit because I am not in the mod to copy it
console.log(rabbit); //Now I can access the animal property in rabbit property
console.log(rabbit.eats);
//now we talk about oops in JavaScript

//we use class to perform oops in JS
//class is the blue print used to make a object

//lets get started it
class Animal {
  constructor(name) {
    //contructor is a special method it will always excute when we create object through it
    console.log("Object is created now...........");
    this.name = name;
    console.log("The animal name is ", name);
  }
  eats() {
    console.log("Animal eat food");
  }
  jumps() {
    console.log("Animal can jumps");
  }
}
class Lion extends Animal {
  constructor(name) {
    super(name);
    console.log("Object is created now.....");
  }
}
let newAni = new Animal("Bunny");
console.log(newAni);
console.log(newAni.name);
console.log(newAni.eats());
console.log(newAni.jumps());
let l = new Lion();
