/*
 ************************ Promises in JavaScript **************************
 promises is use to give a promises like the promises can be rejected or resolve
 */
let prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("I am gull filled");
    resolve("Hello1");
  }, 5000);
});
let prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("I am gull filled 2");
    resolve("Hello 2");
  }, 2000);
});
let prom3 = Promise.resolve([prom1, prom2]);
let prom4 = Promise.all([prom1, prom2]);
let prom5 = Promise.allSettled([prom1, prom2]);
prom3
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
prom4
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
prom5
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
//we have not to create a promises
