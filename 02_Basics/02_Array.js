const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

// const newHero = marvelHeros.push(dcHeros);

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);


console.log( marvelHeros.concat(dcHeros)); // No permanent change in original Array

const heros = [...marvelHeros,...dcHeros,...[1,2,3,4]] // Concat all the arrays into single array
// Spread Operator(...)
// console.log(heros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]


const real_another_arr = anotherArray.flat(2) // Convert all the nested elements into single array
// console.log(real_another_arr);

// console.log(Array.isArray('maitreya')) // Return True of False
// console.log(Array.from('maitreya')) // Converts to an array
// console.log(Array.from(Object.keys({nams:'maitreya',class :2})))  // Interesting case

let score1 = 100
let score2 = 200
let score3 = 500

// console.log(Array.of(score1,score2,score3));

