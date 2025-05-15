const accountId = 14455 
let accountEmail = "abhsihek1331975@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState ; // suppose we don't know the value , we can leave it without assigning -> the O/P will be undefined 

// accountId = 3 // not allowed because accountId is const
accountEmail = "abhi@gmail.com"
accountPassword = "0000"
accountCity = "mumbai"

console.log(accountId); 
console.table([accountId , accountEmail, accountPassword , accountCity , accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope 

*/