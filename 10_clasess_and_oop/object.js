function multiplyby6(num){
    return num*6
}
console.log(multiplyby6(8))

multiplyby6.power = 2 
console.log(multiplyby6.power);
console.log(multiplyby6.prototype); // {}


// Everything in JS is Object 
// String , Array , even function 
// Array -> Object -> null

//-------------
function createUser(username, score){
    this.username = username
    this.score = score
}
// function ke andar do naye function - increment aur printme
createUser.prototype.increment = function(){
    this.score++ 
}
createUser.prototype.prinMe = function(){
    console.log(`price is ${this.score}`);
    
}
// new is necessary because - 
const chai = new createUser("chai" , 25)
const tea = new createUser("tea" , 250)

chai.prinMe()


/*
🔍 new createUser(...) does:
✅ Creates a new empty object:
Like: const obj = {};

✅ Sets this inside the function to point to that new object
So this.username = ... sets properties on that new object

✅ Links the object’s prototype to createUser.prototype
So you can use methods like chai.increment()

✅ Returns the object automatically
So chai gets the new user object

*/

//--------------- Notess ------------------

/*

Here's what happens behind the scenes when the new keyword is used:

1) A new object is created: The "new" keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/