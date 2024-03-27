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

// console.log(typeof temp); // Null -> object
// console.log(typeof userEmail); // undefined -> undefined
// console.log(typeof heros); // array -> object
// console.log(typeof myFunc); // function -> function object
// console.log(typeof myobj); //  objects -> objects

// ++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive)  ,Heap(Non-Primitive)

let myName = 'Maitreya';
let anotherName = myName; // Only the value of myName is 
// given to anotherName. Any change is anotherName 
// is not reflected in myName . A copy is of myName is created
anotherName = 'tubu'
// console.log(anotherName);
// console.log(myName);                        STACK                                      HEAP
                                            
let userOne = {                                 //userOne  ------------------------------>
    email:'user@g.com',                         //userTwo  ------------------------------> // email:'user@g.com',
    upi:'mp@ybl'                               //anotherName = myName                     // upi:'mp@ybl'        
}                                             //myName = 'Maitreya'                   

userTwo = userOne; // userOne reference / address
 // is passes onto userOne. Any change in userTwo 
 // is reflected in userOne
userTwo.email = "mp@gmail.com";
console.log(userTwo);
console.log(userOne);



