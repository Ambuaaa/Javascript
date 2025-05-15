let score = "33" // this is a string
console.log(typeof score ) //o/p - string

// if we have to change it to number

let ValueInNumber = Number(score) 
console.log(typeof ValueInNumber) //number


let anotherscore = "33abc"
let ValueInNumber2 = Number (anotherscore)

console.log(typeof ValueInNumber2) // Number(NaN - Not a number)

// if score = null => typeof = 0
// if score = undefined => typeof = NaN
// if score = true => typeof = 1

/* Notes

"33" => 33
"33abc" => NaN
true = 1 , false = 0 


*/
let isLoggedIn = "abhishek"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/* notes
1 => true ; 0 => false 
" " => false
"abhishek" => true
*/

let somenumber = 22 
let StringNumber = String(somenumber)

console.log(typeof StringNumber); // string
