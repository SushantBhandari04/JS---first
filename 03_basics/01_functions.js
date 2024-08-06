function sayMyName(){
    console.log("S");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
    console.log("t");
}

// sayMyName()


// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(/*username === undefined */ !username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sushant"))
// console.log(loginUserMessage())

function returnCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(returnCartPrice(100,200,5000,6000))

const user = {
    userName: "Sushant",
    userId: 33
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.userName} and user id is ${anyObject.userId}`)
}

// handleObject(user)
// handleObject({
//     userName: "aman",
//     userId: 3
// })


const myArr = [1,2,3,4]
function returnSecondValue(array){
    return array[1]
}

// console.log(returnSecondValue(myArr));
// console.log(returnSecondValue([100,200,300]));

