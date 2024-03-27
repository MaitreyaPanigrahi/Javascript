let score = "33abc";
// console.log(typeof score);
let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);




let score2 = null;
let valueInScore2 = Number(score2);
// console.log(typeof valueInScore2);
// console.log(valueInScore2);

let score3 = undefined;
let valueInScore3 = Number(score3);
// console.log(typeof valueInScore3);
// console.log(valueInScore3);

let score4 = false; 
let valueInScore4 = Number(score4); // true - 1 false - 0
// console.log(typeof valueInScore4);
// console.log(valueInScore4);

let score5 = "33";
let valueInScore5 = Number(score5);
// console.log(typeof valueInScore5);
// console.log(valueInScore5);


// "33"=> 33
// "33abc" => NaN =>type Number
// true => 1 , false => 0

let isloggedIn = "hdhhd"
let booleanIsLoggedIn = Boolean(isloggedIn);
// console.log(booleanIsLoggedIn);

// 1 => True ; 0 => false
// "" => false ; "maitreya" => true ; "0"=>true


let number = 33;
let stringNumber = String(number);

console.log(stringNumber);
console.log(typeof stringNumber);
