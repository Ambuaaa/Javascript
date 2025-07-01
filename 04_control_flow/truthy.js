// truthy and falsy value

const userEmail = "abhishek13319@gmail.com" // we have assumed that the value inside string is true - Truthy value

if(userEmail){
    console.log("Got user email"); // Got user email
}
else{
    console.log("Don't have user email");    
}

/* -------------
// falsy values

false , 0, -0 , BigInt 0n , "" , null , undefined , NaN

--------------
else all are truthy values 
like-
"0" , 'false' , "(space)" , [] , {} , function(){}

*/

// ---- HOw to check that the array is empty
const sampleArray = []

if(sampleArray.length === 0){
    console.log("Array is empty"); // Array is empty
    
}

// How to check that the object is empty

const sampleObject = {}
if(Object.keys(sampleArray).length === 0){
    console.log("Object is empty"); // Object is empty
}

