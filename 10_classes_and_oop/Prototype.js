let myName = "sushant   "
let myChannel = "bhandari   "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor : "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sushant = function(){
    console.log(`sushant is present in all objects`);
}

Array.prototype.heySushant = function(){
    console.log(`Sushant says hello!`);
}

// heroPower.sushant();
// heroPower.heySushant();
// myHeros.heySushant();
// myHeros.sushant();



// INHERITANCE

const user = {
    name: "sushant",
    id: 33
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let AnotherUserName = "somethingNew   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

AnotherUserName.trueLength();
"sushant".trueLength();