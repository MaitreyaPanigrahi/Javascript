
// for loop

// for (/*1 */ let i = 0; /*2 */ i<=10; /*3 */ i++){
//     const element = i; /*4 */
//     if(element == 5){
//         console.log(`Hello i am ${element}`);
//     }
//     console.log(element)
// }

// Steps - 1 -> 2 -> 4 -> 3 -> 2 -> 4 ..... 


// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//     //    console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
    
// }

let myArr = ["Flash","Batman" , "Superman"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
    
}

// break and continue

// for (let index = 1; index <=20; index++) {
//     if(index === 5){
//         console.log(`5 detected !`);
//         break;
//     }
//     console.log(`Value is ${index}`);

    
// }
for (let index = 1; index <=20; index++) {
    if(index === 5){
        console.log(`5 detected !`);
        continue;
    }
    console.log(`Value is ${index}`);

    
}
>>>>>>> b12d498 (for loop)
