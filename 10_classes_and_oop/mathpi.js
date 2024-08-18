// console.log(Math.PI);
// Math.PI = 5;  // We can't change the value of PI
// console.log(Math.PI);


const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descriptor);



const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderchai: function(){
        console.log("chai nhi bani")
    }
}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    enumerable: false
})
Object.defineProperty(chai,'price',{
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));


for (let [key, value] of Object.entries(chai)) {

    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
    
}