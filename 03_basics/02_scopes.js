// -------------Scope= {}----------------

/* 
var c = 300 // 

if(true){
    let a = 10
    const b = 20 
    var c = 30 // do not work in the block scope 
}
// console.log(a); // error - the use of the a is only limited to that block ..... bahar nahi aana chahiye kyunki wahi uska kaam khatam ho gaya
// console.log(b); // error
console.log(c); // 30 ...... 

*/

let a = 300 // global scope 
if(true){ // block scope
    let a = 10
    const b = 20
    console.log("Inner:" , a);
}

// console.log(a); // Ineer: 30 /next line/ 300
// ---------------------------
// Note for interview - 
// "The global scope is different in the browser console (Inspect) compared to when using Node.js in the terminal."
// In the browser console, the global object is window.
// In Node.js, the global object is global.

//------------------Lecture 22------------------

function one(){
    const username = "Abhishek"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website); // out of block scope

    two() // in nested function - usually the child function can access the parent function
    
}
one() // Abhishek

// ----- One more example ----------

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website); // hitesh youtube
    }
    // console.log(website); // error - out of scope
}
// console.log(username); // error - out of scope 

// ------ Interesting example -------

console.log(addone(5)) // this will run ... 6 is the output

function addone(num){
    return num + 1
}



addTwo(5) // this will show error because we have declared the function in different way
const addTwo = function(num){ // this is called expression ( also a function , just it is called)
    return num + 2
}









