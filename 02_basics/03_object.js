// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sushant",
    "full name": "Sushant Bhandari",
    // mySym: "mykey1",  // it is not getting used as symbol
    [mySym]: "mykey1", 
    age: 20,
    location: "Uttarkashi",
    email: "sushant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "sushant@chatgpt.com"
// Object.freeze(JsUser)  // freeze the data of the object
JsUser.email = "sushant@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

