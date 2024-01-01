/*
Create a business name generator by combining the following things 

Adjectives: 

Crazy
Amazing
Fire

Shop Name:
Engine
Food
Garment

Another word:

Bros
Limited
Hub
*/
let first, second, third;

let rand = Math.random();

if (rand < 0.33) {
  first = "Crazy";
} else if (rand < 0.66 && rand >= 0.33) {
  first = "Amazing";
} else {
  first = "Fire";
}
if (rand < 0.33) {
  second = "Food";
} else if (rand < 0.66 && rand >= 0.33) {
  second = "Engine";
} else {
  second = "Garment";
}
if (rand < 0.33) {
  third = "Bros";
} else if (rand < 0.66 && rand >= 0.33) {
  third = "Limited";
} else {
  third = "Hub";
}
console.log(`${first} ${second} ${third}`);
