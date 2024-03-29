 // Immediately invoked function expressions

( function chai(){ // Named IIFE
    console.log(`DB Connected`);
 })();

 // We have to end the excution of IIFE by a ;

//  (function definition)()

// IIFE - Sometimes our functions get polluted due to
//  global  variables. So to address this issue we use IIFE.
//  Its also the function that immediately exxcutes

((names)=>{ // unnamed IIFE
    console.log(`DB Connected two ${names}`)
})('hitesh')
 