// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')  // Symbol is used for unique
const anotherId = Symbol('123')

console.log(id === anotherId)  // false

const bigNumber = 12314343987996976n
console.log(bigNumber)


// Reference(Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman" , "nagraj" , "doga"];
let myObj = {
    name: "sushant",
    age: 20
}

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof bigNumber) // bigint
console.log(typeof outsideTemp) // object
console.log(typeof score) // number
console.log(typeof myFunction) // object