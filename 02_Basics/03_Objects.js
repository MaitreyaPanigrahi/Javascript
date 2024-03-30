// Singleton

// Object Literals
// Object.create


const mySym = Symbol("mySym")
const jsUser = {
    name:"Hitesh",
    [mySym] :"key1", // Insert a symbol inside an object
    "full name":"Maitreya Panigrahi",

    age:18,
    location:'Jaipur',
    email:'mitreya@gmail.com',
    isLoggedIn: false,
    lastLoginDays :["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(jsUser['email']);
// console.log( jsUser[mySym]);

jsUser.email = 'aP@gmail.com'
// Object.freeze(jsUser)
jsUser.email = 'aP@gmail.com'

// console.log(jsUser)

jsUser.greeting = function (){
    console.log("Hello Js User");
}

jsUser.greeting2 = function (){
    console.log(`Hello Js User,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());

// Remember if a function is not returning anything,
// it will return undefined else not return


// jsUser.email = "ap@gmai.com"
// // console.log(jsUser['email']);

// jsUser.greeting = function(){
        // console.log(`hello js user ${this['email']}`) 
        // Log result along with an undefined
//     return (`hello js user ${this['email']}`)
            // Result will be only return statement
// }

// const greet = jsUser.greeting()

// console.log(greet);
