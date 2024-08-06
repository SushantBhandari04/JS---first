// const instaUser = new Object()  // singleton object
const instaUser = {}  // non singleton object

instaUser.id = "123abc"
instaUser.name = "sushant"
instaUser.isLoggedIn = false
// console.log(instaUser);

const regularUser = {
    email: "sushant@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sushant",
            lastName: "Bhandari"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = { obj1, obj2 }
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "1@google.com"
    },
    {
        id: 2,
        email: "2@google.com"
    },
    {
        id: 3,
        email: "3@google.com"
    }
]

// console.log(users);
// console.log(users[1].email);

// console.log(instaUser); 

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));
// console.log(instaUser.hasOwnProperty("id"));

const course = {
    courseName: "DSA",
    price: 999,
    courseInstructor: "Sushant"
}

// course.courseInstructor
// const {courseInstructor} = course
const {courseInstructor: instructor} = course  // object destructuring
// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "sushant",
//     "rno": 33,   
// }

// json
[
    {},
    {},
    {}
]