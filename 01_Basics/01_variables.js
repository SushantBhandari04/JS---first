const accountId = 14455
let accountEmail = "sushant@google.com"
var accountPassword = "12345"
accountCity = "Uttarkashi"
let accountState;

// accountId = 2 // not allowed because accountId is const

accountEmail = "bhandari@google.com"
accountPassword = "6567"
accountCity = "Srinagar"

console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
