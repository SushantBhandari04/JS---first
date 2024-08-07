let a = 10;
if(true){
    let a = 300;
    const b = 200;
    var c = 400;
    // console.log(a);  // 300
}
// console.log(a);  // 10
// console.log(b);  // const,let cannot be accesed outside the scope
// console.log(c);  // var can be accesed outside the scope therefore var is not used

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // we are able to access before initialization

function addone(num){
    return num + 1
}



// addTwo(5)  // we are not able to access before initialization
const addTwo = function(num){
    return num + 2
}
