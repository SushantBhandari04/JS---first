// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[3])

// Array methods

// myArr.push(600)
// myArr.push(100)
// myArr.pop()

myArr.unshift(100)  // adds element at the start
myArr.shift()  // removes element from the start 

// console.log(myArr.includes(100))  // check if element is present in the array
// console.log(myArr.indexOf(2))   // return index of element

const newArr = myArr.join()  // convert array into string
// console.log(newArr)
// console.log(typeof newArr)
// console.log(myArr)

 //  slice and splice
 const arr2 = myArr.slice(1,3)  // does not manipulate the original array
 const arr3 = myArr.splice(1,3)  // manipulates original array  =>  removes elements from the original array
 console.log(arr2);
 console.log(arr3);
 console.log(myArr);
 
 
 