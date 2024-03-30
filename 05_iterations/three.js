// for of
// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
// }

// const str = "maitreya";
// for(const val of str){
//     console.log(val)
// }

// Maps - holds key value pair , remember the order of the elements no duplicate values


const newMap = new Map();
newMap.set('IN',"INDIA")
newMap.set('USA',"United States of America")
newMap.set('Fr',"France")
newMap.set('IN',"INDIA")

// console.log(newMap)

for(const [key,value] of newMap){
    // console.log(key,value)
}

const myObj = {
    'Game1':"NFS",
    'Game2':"Spiderman"
}

// for (const [key,value] of Object.entries(myObj)) {
//     // console.log(key,value)

// }

// console.log(Object.entries(myObj))

