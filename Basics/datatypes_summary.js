// +++++ PRIMITIVE ++++++++++

// 7 types :String , Number, boolean,null,
//undefined,symbol,BigINT

const score = 100;
const scoreValue = 100.3;
const isLogIn  = true;
const temp = null;
let userEmail ;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.table([id,anotherId]);
// console.log(id == anotherId);

// Reference (NON -PRIMITIVE) : 
//Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"];

let myobj = {
    name:"maitreya",
    age:22
}

const myFunc = function add(a,b){
    return a+b
}

console.log(typeof temp); // Null -> object
console.log(typeof userEmail); // undefined -> undefined
console.log(typeof heros); // array -> object
console.log(typeof myFunc); // function -> function object
console.log(typeof myobj); //  objects -> objects



