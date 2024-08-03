// let score = "33abc" 
let score = null

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)  // if score is not a number , then it still gives number
// console.log(valueInNumber)  // Nan


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = "abc"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "abc" => true


let someNumber = 33
let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber)
console.log(typeof stringSomeNumber)