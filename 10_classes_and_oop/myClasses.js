// ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const sushant = new User("sushant", "sushant@gmail.com","123")
console.log(sushant)
console.log(sushant.encryptPassword());
console.log(sushant.changeUserName());



// Behind the scene

function User(username,email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const aman = new User("aman", "aman@gmail.com", "321");
console.log(aman);
console.log(aman.encryptPassword());
console.log(aman.changeUserName());
