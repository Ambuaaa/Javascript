/* how data is kept in the memory and how it is accessed

There are two classification according to it
Primitive and Non Primitive / reference type

1) Primitive type
All primitive datatypes are call by value
7 types :- String , Number, Boolean , null , undefined , Symbol , BigInt

2) Non Primitive / reference type
We can direct allocate the reference of these into the memory

Arrays , Objects , Functions 


*/

// NOTE

// JavaScript is dynamically typed, which means you don’t need to declare variable types. The type of a variable is determined at runtime, and it can change as the program runs.
// e.g => const score = 100
// e.g => const isLoggedIn = false 
// e.g of symbol =>




const id = Symbol ('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false 

// example of array 
const heros = ["shaktiman" , "nagraa " , "doga"]

//example of object 
let myObj = {
    name : "abhishek" ,
    age: 23 , 
}

//declaring function (here treating it as a variable)
const myFunction = function(){
    console.log("Hello world");
    
}

// Note

// datatype of Null(after using typeof) => object
// typeof {}         // "object"
// typeof []         // "object"
// typeof function(){} // "function"
 
    