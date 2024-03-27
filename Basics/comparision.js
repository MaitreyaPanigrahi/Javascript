// console.log("2">1);
// console.log("02">1);

// console.log(null > 0); // null treated as 0
// console.log(null >= 0) // null treated as 0
// console.log(null == 0) // Null treated as undefined
// console.log(null < 0) // null treated as 0
// console.log(null <= 0) // null treated as 0

// console.log(undefined > 0)
// console.log(undefined >= 0)
// console.log(undefined == 0)
// console.log(undefined < 0)
// console.log(undefined  <= 0)

// We should always avoid such comparisions

// === => strict equality -> check for both value & type
// == => abstract equality -> check for only value

let a = "2";
let b = 2;
console.log(a == b);
console.log(a === b);

console.log("2">=1);


