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

// ************Operations **********************

let value = 3 
let negValue = - value
console.log(negValue) // -3

// console.log(2+2); 
// console.log(2-2); 
// console.log(2*2); 
// console.log(2**3); // 2 power 3 
// console.log(2/2); 
// console.log(2%2); 

let str1 = "abhishek"
let str2 = " bhai"
let str3 = str1 + str2 
console.log(str3); // abhishek bhai 

// The problems come here
console.log("1" + 2 ); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2 ); //122
console.log(1 + 2 + "2"); // 32 => This is the problem 

// the suggestion is to not write some messy code and please use parenthesis in such situation 

// In JavaScript, if a string comes first in an expression using +, everything after it is treated as a string (string concatenation). 
// If the string comes last, earlier numbers are evaluated first (number addition), then converted to a string if needed.

 



 