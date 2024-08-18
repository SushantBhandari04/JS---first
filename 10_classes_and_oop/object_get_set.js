const User = {
    _email: "sushant@gmail.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const sushant = Object.create(User);
console.log(sushant.email)