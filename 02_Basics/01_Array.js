const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[3]);

//Array Methods

// myArr.push(99); // Push into last of array permanently
// myArr.push(96);
// myArr.pop()

// myArr.unshift(-1) // Shift all element by 1 and enters an element at first
// myArr.shift() // Remove the first element

// console.log(myArr.includes(9)); // Return true or false
// console.log(myArr.indexOf(9)); // Return index else return -1 if absent

// const newArr = myArr.join()

// console.log(myArr);// [0,1,2,3,4,5]
// console.log( newArr); // 0,1,2,3,4,5
// console.log(typeof newArr); // String

// slice ,splice

console.log("A", myArr); // [0,1,2,3,4,5]

const myN1 = myArr.slice(1, 3); // 1 included nd 3 excluded. Return the portion.No impact on original array
console.log(myN1);  // [1,2]
console.log("B", myArr); // [0,1,2,3,4,5]

const myN2 = myArr.splice(1, 3); // 3 is the delete count.Cut the portion from original array and return it.Have impact on original array
console.log(myN2); // [1,2,3]
console.log("C", myArr); // [0,4,5]

