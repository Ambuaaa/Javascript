// Object literal
const user = {
    username: "Abhishek" , // username , loginCount are all properties
    loginCount: 8 ,
    signedIn: true , 
    
    getuserDetails: function(){
        // console.log("Got user details from database");  
        // console.log(`Username: ${this.username}`); // abhishek // this nahi likhenge to answer aaega "not defined" because use pata nahi hai ki kaun se username ki baat kar rahe ho , this states that we are talking about current context
        // console.log(this); // will show everthing in courrent context
            
    }

}

// console.log(user.username); // Abhishek
// console.log(user.getuserDetails()) ;
// console.log(this); // {} , yahan pe alag hai aur browser me alag hoga , because when we do this on browser current context will show "windows" and in windows there are many things(WEb API) which are provided by the browser.  

// What if we want to take the value of multiple users => We have to copy paste which is not a good solution , Hence we use -

//----------Constructor-----------

function User(username , logincount, isLoggedIn){
    this.username = username ;
    this.logincount = logincount ;
    this.isLoggedIn = isLoggedIn ;

    this.greeting = function(){
        console.log(`Welcome ${this.username}` );
        
    }

    // return this // we will get many things , you can check in the browser
}
// we used to do like this 
// const userOne =  User("abhishek" , 12, true );
// const userTwo =  User("Chai aur Code" , 11 , true )

// console.log(userOne); // User { username: 'Chai aur Code', logincount: 11, isLoggedIn: true } // we will see the answer is of userTwo . UserTwo ne overwrite kar di value sari ki sari
// Hence we will use 'new' keyword for creating new instance 
// Constructor function - gives the copy everytime (instance) , we can do whatever we want to using that instance

const userOne = new User("abhishek" , 12, true ) ;
const userTwo = new User("Chai aur Code" , 11 , true) ;

console.log(userOne); // User { username: 'abhishek', logincount: 12, isLoggedIn: true }
console.log(userTwo); // User { username: 'Chai aur Code', logincount: 11, isLoggedIn: true }
// console.log(userOne.greeting());  Hello Abhishek => JavaScript does not execute functions inside objects automatically


// ---------Notes---------
//-------new keyword----------
// 1) Whenever we create "new" keyword , a new empty object {} is created which is called "instance" 
// 2) The constructor function is called due to the "new" keyword . 
// 3) Everything (every arguments) that we wrote get injected in the that .Sets "this" inside the function to that new object 
// 4) We get the value inside the function 

// Other things in the objects.js files