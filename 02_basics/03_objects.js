// OBJECTS - Stores value in Key - pair value 

// one method - using constructor => singleton is also formed
// Object.create 

// second method ( most used ) - object literals

// ---Note -----------------
// suppose we have a symbol - we will access through the [square bracket method]
const mySum = Symbol("key1")
// --------- Back to where we were ---------

const JsUser = {
    name: "Abhishek" ,
    age: "23" ,
    email : "abhishek@gmail.com" ,
    isLoggedIn : false ,
    lastLoginDays: ["monday" , "tuesday "] ,
    "full name " : "Abhishek Kumar" ,
    [mySum] : "mykeysbroooo" // to access symbol we have to declare variable in [] too 

}

// how to access object - two method 
// 1) use variable name & dot(.) => JsUSer.name
// 2) use variable name & [square brackets] => JsUser["name"]

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name "])
console.log(JsUser[mySum]) 


// to change value -> use "=" 
JsUser.email = "abhishekgogogo@google.com"

// when we want to freeze the object - so no further changes
// Object.freeze(JsUser) 
// eg
// JsUser.email = "asdasdaskldhasdha@gmail.com"
// console.log(JsUser); // it won't change now 

// ------------------------------------

// to declare a function inside Objects

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS USer ${this.name}`); // we use this. for referencing the same object 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());





