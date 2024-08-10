// const coding = ["js", "ruby", "java", "python", "cpp"]

// for each does not return anything
// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values)


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((item) => item > 4 )

// const newNums = myNums.filter( (num) => {
//     return num > 6;  // inside scope we have to use return 
// })
// console.log(newNums)


const newNums = []
myNums.filter( (num) => {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);
