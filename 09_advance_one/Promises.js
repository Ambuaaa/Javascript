// jyadatar Promises hum consume hi karte hain , banate bhi hain , par consume bhi jyada karte hain

const promiseOne = new Promise( function (resolve, reject) { // // promise ban gaya . We used "new" keyword because Promises is an object and to create object we have to write "new" keyword
    // Do an async task
    // e.g. DB calls ,cryptography , network calls
    setTimeout(function(){
        console.log("Async task is completed");
        resolve() ; // to connect to the .then => ✅ resolve() is used inside a Promise to indicate a successful operation.✅ It passes the result to the .then() handler.✅ Think of it as: "Everything went fine — here's your data!"
    },1000)
}) ;    

// consumption
promiseOne.then( function(){ // resolve is directly connected to .then
    console.log("Promise consumed");
}) 

// ------------------------------
new Promise(function(resolve , reject) {
    setTimeout(function(){
        console.log("Aysnc task 2");
        resolve() ;
    }, 1000)
}) .then( function(){ // we can also write this as this
    console.log("Promise 2 is consumed");
    
});

// -------------------------------
const PromiseThree = new Promise(function(resolve, reject){
    setTimeout( function(){
        resolve({username: "Chai" , email: "chai@example.com"}) ; // we can directly write the objects inside the resolve
    },1000)
})
PromiseThree.then( function(user){
    console.log(user);
})

//----------Chaining .then()------------
const PromiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false ;
        if(!error){
            resolve({username:"abhishek" , password: "456"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    } ,1000)
})

PromiseFour.
then( (user) =>  { // // First .then receives the full user object => If we only want the username, we return it here
    console.log(user);
    return user.username ; // Agar next .then() nahi likha, to wo value aage use nahi ho payegi — par error nahi aayega
}).then((username)=>{ // this time .then is used to return the username 
    
}).catch((err)=>{ // if error throws 
    console.log(err);
}).finally( () => { // this will always run 
    console.log("The promise is either resolved or rejected");
})

// --------Using async function---------------

const Promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true ; // agar false hota to direct answer aa jata . Note that asyn await cannot handle the errors directly 
        if(!error){
            resolve({username: "javascript" , password: "12345"})
        }else{
            reject('Error : The Javascript content is not available ') ;
        }
    },1000)
});
// dusra approach - async await--------
async function consumePromiseFive(){
    try {
        const response = await Promisefive // note that promise is an object so we cannot use Promisefive() , do not use ()
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive() 

// ------ the above code can be written as -------

fetch('https://jsonplaceholder.typicode.com/userss')
.then( (response)=>{
    return response.json()
}) .then((i) => {
    console.log(i);
})
.catch( (error) => {
    console.log("This is not working");
})


//--------example-----------

fetch('https://api.github.com/users/Ambuaaa')
.then( (response)=>{
    return response.json()
}) .then((i) => { // this .then handles the return of previous .then
    console.log(i);
})
.catch( (error) => {
    console.log(error);
})
// Question:- Why the values from this api using fetch is showing above all the other value ; even though in some place , we haven't used the setinterval ?
// ANswer - next part 
//--------------------------------------------------------------------------------------------------

// ✅ Crisp Explanation:
// async/await is syntactic sugar over .then() and .catch().
// It lets you write asynchronous code that looks synchronous (easier to read).
// You use await inside an async function to pause until the Promise resolves or rejects.

//------------------ Notes------------------------
// CODE- 
// fetch('https://jsonplaceholder.typicode.com/userss')
// .then( (response)=>{
//     return response.json()
// }) .then((i) => {
//     console.log(i);
// })
// .catch( (error) => {
//     console.log("This is not working");
// })

//[QUESTION] => Why the .catch() is not working - Even if if given the wrong URL

// ChatGPT said:
// Great question — and you're very close to understanding a common pitfall with fetch().

// ❗ Problem:
// Your .catch() is not logging "This is not working"
// even though the URL 'https://jsonplaceholder.typicode.com/userss' is incorrect (should be users not userss).

// 🧠 Why?
// Because **fetch() does NOT throw an error for HTTP errors like 404**
// It only throws errors for network failures (e.g., no internet, DNS error, etc.)

// So:
// A 404 (Not Found) still resolves the Promise

// It does not go to .catch()

// But response.ok === false

// ✅ How to handle this correctly:

// fetch('https://jsonplaceholder.typicode.com/userss')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("HTTP error: " + response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("This is not working");
//     console.error(error); // Optional: to see the actual error
//   });

// 🚦 Step-by-step Execution:

// fetch() is called — it makes a request to the server.

// Server responds with status 404, but no network error, so fetch() resolves, not rejects.

// The .then((response) => { ... }) runs:

// It checks: if (!response.ok) → true because response.ok === false for 404.

// It throws: throw new Error("HTTP error: 404")

// That skips the next .then() (with data) and goes directly to .catch()

// Inside .catch(), you print:

// "This is not working"

// The actual error message: "Error: HTTP error: 404"


