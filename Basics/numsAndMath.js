const score = 87;
const balance = new Number(100);
// console.log(score);
// console.log( balance);

// console.log(typeof balance.toString());
// console.log(balance.toFixed(2));

const otherNum = 123.8763; // 124 -> 23.8763 - 23.9
// console.log(otherNum.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++ MATHS ++++++++++++

// console.log(Math);
// console.log(Math.abs(-88));  //Absolute
// console.log(Math.round(4.55)); 
// console.log(Math.ceil(4.55)); 
// console.log(Math.floor(4.55)); 

// console.log(Math.random()); //  any random value from 0 - 1
// console.log((Math.random()*10) + 1) // +1 to avoid 0 case

const min = 1;
const max = 6;
// If we want random number between a certain range
console.log(Math.floor((Math.random() * (max - min + 1)) + min))








