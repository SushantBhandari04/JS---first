user = {
    username: "Sushant",
    userId: 33,

    welcomeFunction: function(){
        console.log(`${this.username}, welcome here`);
        console.log(this);
        
    }
}


// user.welcomeFunction()
// user.username = "Aman"
// user.welcomeFunction()
// console.log(this);


function fun(){
    let username = "Sushant"
    console.log(this.username); // this keyword does not work inside the function
}
// fun()

// const aFunction = function(){
//     username: "Sushant"
//     console.log(this.username);  // undefined
// }


// arrow function
const aFunction = () => {
    username: "Sushant"
    console.log(this.username); // undefined
}
// aFunction()


// const addTwo = (num1,num2) => {
//     return num1 + num2  // explicit return
// }

const addTwo = (num1,num2) => (num1 + num2) // implicit return
// console.log(addTwo(2,4));


const userFunction = () => ({username: "Sushant"})  // for object
console.log(userFunction());