class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}sushant`
    }
    set password(value){
        this._password = value;
    }
}

const sushant = new User("sushant@ai.com", "abc");
console.log(sushant.email)