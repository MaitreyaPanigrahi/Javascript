const user = {
  userName: "hitesh",
  price: 999,
  welcomeMsg: function () {
    //    console.log(`Welcome to the website,${this.userName}`);
    //    console.log(this);
  },
};

// user.welcomeMsg()
// user.userName = 'sam';
// user.welcomeMsg()

// console.log(this); // {} because we are in node environment
// But if we do console.log(this) is browser console it will
//  give  you a window object, which is the global object of browser

// Earlier we have only browser engine to use javascript but
// now a days we have our own engine like Node,bun, etc.

// function chai(){
//
// }
// chai();

// const chai = function(){
//     let userName  = "hitesh"
//     console.log(this.userName);
// }

const chai = () => {
  let userName = "hitesh";
  console.log(this);
};

// chai()  // const addTwo = ()=>{}

// const chai2 = function(){
//     let userName = "Hitesh";
//     console.log(this);
// }

// chai2();

// const addTwo = (a,b)=>{
//     return a+b;     // Arrow Function , Explicit return
// }
// const addTwo = (a,b)=>  (a+b); // Implicit return

const addTwo = (a, b) => ({ username: "hitesh" }); // Take an object

// If we use curly brackets in arrow functions,
// we have to  return statement

// console.log(addTwo(200, 300));

// const myArr = [2,3,4,5,5];
// const funcArr = myArr.forEach(items =>console.log(items));

// funcArr;


const myObj = {
    user:'tubu',
    id:"2",

     func :()=>{
        console.log(this);
    }
}

myObj.func()



