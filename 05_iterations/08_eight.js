const nums = [1,2,3,4,5]

// const total = nums.reduce( function (accumulator,currentvalue) {
//     console.log(`accumulator: ${accumulator} and currval: ${currentvalue}`)
//     return accumulator+currentvalue ;
// }, 0)

const total = nums.reduce( (acc,curr) => acc+curr,0)

console.log(total)