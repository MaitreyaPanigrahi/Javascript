// if

// if(true // condition){
//     //Will go inside the scope
// }
// if(false // condition){
//     // Will not go inside the scope
// }

// const isUserLoggedIn = true;

// if(2==="2"){
//     console.log("Executed with comparing values");
// }
// else{
//     console.log("Executed ny comparing values and types")
// }

// compare operator - < , >, >= , <= , ==, != , ===,!==


// const score = 200
// if(score  > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`) //  Will not get executed

const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2");


// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 500");

// }
// else if(balance < 900){
//     console.log("less than 500");

// }
// else{
//     console.log("less than 1200")
// }


const isUserLoggedIn = true;

const debitCard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true
if(isUserLoggedIn && debitCard ){
    console.log("Allowed to buy courses");
}
if(loggedInFromGoogle || loggedInFromEmail ){
    console.log(`User logged In`);
}

