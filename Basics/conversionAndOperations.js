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

// console.log(stringNumber);
// console.log(typeof stringNumber);


// ****************** OPERATIONS ********************

let value = 3;
let negValue = -value;
// console.log(negValue);

let str1 = "maitreya";
let str2 = " panigrahi"

// console.log(str1 + str2);

// console.log("1" + 2);

// console.log("1" + 2 + 2);

// console.log(1 + 2 + "2");

// console.log(1 + "2" + 2);

// console.log(+false); // 0 +true => 1
// console.log(+"") // 0


let num1 ,num2 , num3

let gameCounter = 100;
console.log(gameCounter++) ;
console.log(gameCounter);

/* gameCounter++ / gameCounter-- -> Postfix  =>If used 
postfix, with operator after operand
 (for example, x++), the increment operator 
increments and returns the value before incrementing.

++gameCounter / --gameCounter  -> Postfix =>If used 
prefix,with operator before operand (for example, ++x), 
 the increment operator 
  increments and returns the value after incrementing.
*/


