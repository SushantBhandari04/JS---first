// Immediately Invoked Function Expression (IIFE)

// sometimes global scope pollution causes problems, so for removing that iife is used
// the functions which executes immediately

// (function fun(){
       // named iife
//     console.log(`Database connected`)
// })(); // for ending iife semicolon is used

// (() => {
//     console.log(`Database two connected`)
// })();

( (name) => {
    console.log(`Database three connected for ${name}`)
} )('Sushant');