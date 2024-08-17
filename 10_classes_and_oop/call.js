function SetUsername(username){
    // complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username,email,password){
    // SetUsername(username);
    SetUsername.call(this, username);  // call passes current execution context to other function

    this.email = email;
    this.password = password;
}

const user = new createUser("sushant", "sushant@gmail.com", "123");
console.log(user);