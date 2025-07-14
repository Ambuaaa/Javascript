/*   First, what is a prototype?
Every JavaScript object has a hidden [[Prototype]] property, which links it to another object (often called its "parent" or "prototype").
This is how inheritance works in JavaScript.
*/

// let myName = "Abhishek"

// console.log(myName.length); // 8
// But if we do 

let myName = "Abhishek        " // 8 spaces

console.log(myName.length); // 16 

// Suppose we do not want this . 
// We want to make a new property named - "trueLength" which takes the input 
// and print = "The true length of the string is ${proper value}" and removes all spaces

// console.log(myName.trueLength) ; // we want to make this

String.prototype.trueLength = function(){
    console.log(`The true length of the string is ${this.trimEnd().length}`);
}

myName.trueLength() ; // The true length of the string is 8
"govinda".trueLength() ; // The true length of the string is 7

//---------------------------------
let myHeros = ["thor" , "spiderman"]


let heroPower = {
    thor: "hammer" ,
    spiderman: "sling" ,

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abhishek = function(){ // the top hierarchy is object . Hence if we change that object , it wil be affected to everyone
    console.log("Abhishek is present in all object");   
}
// We only gave power to the Arrays 
Array.prototype.heyabhishek = function(){
    console.log("hello bhai ");
    
}

// heroPower.abhishek() // Abhishek is present in all object 
myHeros.abhishek() // Abhishek is present in all object
//We 
myHeros.heyabhishek() // Hello bhai 
// heroPower.heyabhishek() // error


/*-------------------------------------
🧱 At the top of the chain:
"Object.prototype" is the root prototype

Every object (and even arrays and functions!) inherits from it

So if you add a method to Object.prototype, it becomes available in all objects
*/

/*
⚠️----- Important Warning:-------

❗ Never use Object.prototype to add custom methods in real projects.

Why?

It affects all objects globally → can cause conflicts in libraries
Reserved for built-in JS behaviors
Only okay for learning and experimentation
*/


//-----------Inheritance -----------------
const User = {
    name: "Amarpaaaali" ,
    email: "amarpaali@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupoort = {
    makeAssignment: 'JS assignment',
    fullTime: true ,
    __proto__: TeachingSupport // it borrowed the property of TeachingSupport
}

Teacher.__proto__ = User // now Teacher can use the property of all the user


console.log(Teacher.name); // "Amarpaaaali" → inherited from User
console.log(Teacher.email); // "amarpaali@gmail.com" → inherited
console.log(Teacher.makeVideo); // true 
// But this is outdatedd

//-------Modern syntax----------

//1) setPrototypeof() 
Object.setPrototypeOf(TeachingSupport, Teacher) // Inherited both TeachngSupport and Teacher

