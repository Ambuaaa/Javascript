// -------Pre-requisite(Understanding of this keyword)-----

const user ={
    username: "Abhishek" ,
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`);   // 'this' refers to the object 'user'
        // console.log(this); // "this" refers to the current context
        
    }
}

// user.welcomemessage() // Abhishek , welcome to website - the context was same until here
// user.username = "Ram"
// user.welcomemessage() // Ram , welcome to website = in the above line the context changed that's why 

// console.log(this); // the value here is "{}"" - empty . This is because the current context here is declared in the global scope at is pointing towards node which is empty . Also note that when the same code is declared in the windows interface , the value of this will be - "windows" here and not "{}" because there it is pointing towards the windows context


//---------------------------------------

function chai(){
    let username = "Abhishek"
    console.log(this.username);   // undefined
}
chai()

// It will print: undefined because 
// "this" refers to the global object (like window in the browser),
// but 'username' is a local variable declared inside the function.
// 'this.username' tries to access a property named 'username' on the global object,
// but since we used 'let', the variable is scoped to the function — not added to 'this'.
// Therefore, 'this.username' is undefined.

// will happen same thing in(trying to define function through different ways)
const chaiii = function(){
    let username = "Abhishek"
    console.log(this.username);
}
chaiii() // undefined here also


// ---------Basics of Arrow function--------------

const chaiiii = () =>{  // remove function keyword and after parenthesis use =>(arrow) ..... ban gaya Arrow function
    let username = "Abhishek"
    console.log(this.username);
}
chaiiii() // undefined

//------Interview question------
// Q) difference between normal function and arrow function 
// Ans) "The main difference is in how "this" behaves.
// Normal functions get their own "this" based on how they're called, while arrow functions do not have their own "this" , they inherit it from their lexical scope.
// Also, arrow functions can't be used as constructors and lack their own arguments object."

// ---------Arrow function -----------

// ----(Explicit return)----

const addTwoo = (number1 , number2)=>{
    return number1 + number2    // if we used curly braces then we have to include the return statement 
}
console.log(addTwoo(80 , 80 )) //160



// -----can also be used as (Implicit return) ------------
// const addTwo = (number1 , number2) =>  (number1 + number2) // if we used parentheses then no need to use return statement

const addTwo = (number1 , number2) =>  ({username: "abhishek"}) // if we are decalring object , we will wrap it inside the parenthesis because otherwise it will show undefined ......{ username: 'abhishek' }

console.log(addTwo(80 , 80 )) //160



