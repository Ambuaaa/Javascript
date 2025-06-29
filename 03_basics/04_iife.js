// Immediately Invoked Function Expressions ( IIFE )
//  it’s a function that runs immediately after it’s defined.
// just wrapping in the parenthesis


(function chai(){ // named IIFE
    console.log(`DB connected`);
})() ;            // O/P - DB connected ...... also note that we have to use ; when we are ending the statement to end

// we studied earlier that we can use the () parenthesis to wrap the things when we do not use return statement. the next () is for the execution




// ------using arrow function----


( (name) => { //unnamed iife
    console.log(`DB connected two ${name}`);
}) ("abhishek")         // DB connected two abhishek




// usecases
//1) Avoid polluting the global scope :- Variables declared inside an IIFE are not accessible outside.
//2) Create a private scope :-It acts like a temporary function block