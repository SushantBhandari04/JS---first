// const promiseOne = new Promise(function(resolve,reject) {
//     // Do an async task
//     // DB calls, Cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){  // then is connected with resolve
//     console.log("Promise consumed");
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({userName:"Sushant", userId: 33});
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({userName:"Aman", userId: 3});
//         }
//         else{
//             reject("ERROR: Something went wrong!")
//         }
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.userName;
// }).then((userName)=>{
//     console.log(userName);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected.")
// })


// const promiseFive = new Promise(function(resolve,reject){
//     let error = false;

//     if(!error){
//         resolve({userName:"JavaScript", userId : 123})
//     }
//     else{
//         reject('ERROR: JS went wrong')
//     }
// },1000)

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive();



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json;
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUsers();




fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));