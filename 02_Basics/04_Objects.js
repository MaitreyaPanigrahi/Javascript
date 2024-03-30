const tinderUser = new Object(); // Singleton object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// const tinderUser = {} No-singleton object
// console.log(tinderUser);

const regularUser = {
  email: "mp@g.com",
  fullName: {
    userFullName: {
      firstName: "Hitesh",
      lastName: "Pani",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
  email: "mp@gmail.com",
  1: "a",
  2: "b",
};

const obj2 = {
  emailId: "ap@gmail.com",
  3: "c",
  4: "d",
};
const obj4 = {
  emailIds: "ap@gmail.com",
  5: "c",
  6: "d",
};

// const obj3 = Object.assign(obj1,obj2,obj4) // assign all the object elements into obj1
// const obj3 = Object.assign({},obj1,obj2,obj4) //  assign all the object elements into a blank object {}
const obj3 = { ...obj1, ...obj2, ...obj4 };
//Spread Operator(...)
// console.log(obj3)

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "g@gmail.com",
  },
];

users[1].email;

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)) // Return Arrays
// console.log(Object.values(tinderUser)) // Return Arrays
// console.log(Object.entries(tinderUser)) // Return Array of arrays
// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // Retrun true or false if present

const course = {
  courseName: "js in hindi",
  price: "999",
  courseIntructor: "hitesh",
};
const { courseIntructor: instructor } = course; // Change key name
// console.log(courseIntructor);

console.log(instructor);

//JSON
// {
//     "name":"maitreya",
//     'id':"653",
//     "cost": "876"
// }

[
    {},{},{}
]
