let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2024,0,23);
// let myCreatedDate = new Date(2024,0,23,5,3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2014");
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000)); // To seconds

let newDate = new Date();
// console.log(newDate.getMonth())

newDate.toLocaleString('default', {
    weekday:"long"
})
