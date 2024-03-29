const userEmail = [];

// if(userEmail){
//     console.log("Got user Email");
// }
// else{
//     console.log("Dont have user Email");
// }

// Falsy - false,0,-0,BigINT(0n),"",null,undefined,NaN
// truthy - "0",'false'," ",[],{},function(){}

// if(userEmail.length === 0){
//     console.log(`Array is Empty`);
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) { // TO detect object is empty or not
    // console.log(`Object is empty`);
}

// NULLISH COALESCING OPERATOR (??): null undefined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10

// val1 = undefined ?? 15 //  15

val1 = null ?? 10 ?? 15
console.log(val1);

// ternary Operator

//  condition ? true:false

10<5?console.log(`Greater`):console.log(`Lesser`);
