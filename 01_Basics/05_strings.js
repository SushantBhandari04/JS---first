const name = "Sushant"
const rollNo = 33

// console.log(name+"And"+rollNo)  // old way

// console.log(`Hello my name is ${name} and my roll no. is ${rollNo}`)  // => modern way


const gameName = new String('GTA')
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(1))
// console.log(gameName.indexOf('G'))
const gameName2 = gameName.substring(0,2)
// console.log(gameName2)

const gameName3 = gameName.slice(-1,3)  // in slice we can also use reverse
// console.log(gameName3)

const newStringOne = "   Sush ant   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://sushant.com//sushant%20bhandari"
console.log(url.replace('%20','-'))
console.log(url.includes('sushant'))

const str = "sushant-bh-33"
console.log(str.split('-'))