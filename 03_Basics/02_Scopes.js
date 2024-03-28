let a = 300;
if (true) {
  let a = 10;
  const b = 20; // Block scope
  var c = 30;
  // console.log(`INNER ${a}`); // 10
}

// console.log(a); // 300
// console.log(b);
// console.log(c);

let d = 40; // Global scope

// Nested Scope

function one() {
  // const userName = "Hitesh";

  function two() {
    // const website = "youtube";
    console.log(userName);
  }

  // console.log(website);

  two();
}

// one();

if (true) {
  const userName = 'hitesh'
  if(userName === "hitesh"){
    const website = " Youtube"
    // console.log(userName + website)
  }
  // console.log(website);
}
// console.log(userName)

/// ++++++++++++++++++++++ interesting +++++++++++++++

console.log(addone(5))
function addone(num){
  return num + 1
}



addTwo(5) //  Cannot access before initialisation
const addTwo = function(num){ // Expression
  return num +1;
}

