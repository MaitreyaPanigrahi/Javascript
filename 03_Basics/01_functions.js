function sayMyName() {
  console.log("Hitesh"); // Keyword functionName(parameters){Body}
}

// sayMyName // Reference
// sayMyName() // Function call

// sayMyName()

// function addTwoNums(a,b){  // function(arguments)
//     console.log(a+b);
// }

// function addTwoNums(a,b){  // function(arguments)
//     return a+b;
// }
// const result = addTwoNums(3,5)
// console.log(`Result is ${ result}`);

function userLoginMsg(userName = "sam") {
  if (!userName) {
    console.log(`Please enter a user name`);
    return;
  }
  return `${userName} just logged in`;
}

// console.log(userLoginMsg("Hitesh"))
// console.log(userLoginMsg()) // -- Undefined

function calculateCartPrice(a,b,...num1) { // (... rest operator)
  return num1;
}

console.log(calculateCartPrice(200,400,500)); // [500]
// Return an array [200,400,500]

const user = {
    userName:'hitesh',
    price:199
}

function handleObject(anyObj){
    console.log(`UserName is ${anyObj.userName}  and Price is ${anyObj.price}`);
}

handleObject(user);

const myNewArr = [200,400,100,600]
function handleArr(anyArr){
    console.log(`Second element is ${anyArr[2]}`);
}

handleArr(myNewArr)