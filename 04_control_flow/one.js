// if

/* 
if(condition){
    code
}
Some operator
 < , > , <= , >= , == , != , ===(also checks the type) , !== , 

*/


const isUserLoggedIn = true
const temperature = 41 

if(temperature<50){
    console.log("Good weather  , temperature is less than 50"); // Good weather  , temperature is less than 50

}
else{
    console.log("Bad weather");
    
}

/* 

const score = 200 
if(score > 100){
    const power = "Fly"
    console.log(`User power: ${power}`); // User power: Fly
}
console.log(`User power: ${power}`); // error , due to scope (power is not defined)

*/



// ------Short hand notation ----
// const balance = 1400
// if (balance>500) console.log("test"); // test

// ------nesting-------
const balance = 1500
if(balance < 500){
    console.log("Less than 500"); 
} 
else if(balance < 750){
    console.log("Less than 750");
} 
else if(balance<900){
    console.log("less than 900");  
}
else{
    console.log("Uimaa , it is greater than 1000");   
}

// ---------Checking two condition-------
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){ // AND operator - all condition must be true
    console.log("Allow to buy courses");
}
if(loggedInFromGoogle || loggedInFromEmail){ // OR operator - one of the condition must be true
    console.log("User logged in");
}

// -----------------

// Nullish Coalescing Operator(??): for handling - null , undefined values in the bigger database
let val1 ;
// val1 = 5 ?? 10        //5
// val1 = null ?? 10        //10
// val1 = undefined ?? 15      //15
val1 = null ?? 10 ?? 15         //10


console.log(val1);

// ----------
// ------Terniary operator--------

// condition ? true : false 

const iceteaprice = 100
iceteaprice<=80 ? console.log("Less than 80") : console.log("More than 80");
;




