const nums = [1,2,3,4,5]

// const total = nums.reduce( function (accumulator,currentvalue) {
//     console.log(`accumulator: ${accumulator} and currval: ${currentvalue}`)
//     return accumulator+currentvalue ;
// }, 0)

const total = nums.reduce( (acc,curr) => acc+curr,0)

console.log(total)

const shoppingCart = [
    {
        courseName: "python",
        price: 999
    },
    {
        courseName: "java",
        price: 2999
    },
    {
        courseName: "javascript",
        price: 3999
    },
    {
        courseName: "AI",
        price: 6999
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc+item.price,0)
console.log(priceToPay)