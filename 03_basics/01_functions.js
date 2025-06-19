function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
}
// sayMyName // this is just reference
// sayMyName() // this is execution

function addTwoNumbers(num1 , num2){ // this is parameters (num1 , num2)
    console.log(num1 + num2);
}
// addTwoNumbers(3,4) // this is arguments 
// what if we want to store the value of addTwoNumbers in some variable ?
const result = addTwoNumbers(3,5)
// console.log(result); // the answer will be undefined

//-----How to do this ----------

function addTwoNumbers (nums1 , nums2){
    let result = nums1 + nums2 
    return result 
}
// console.log("Result is :" ,  result);

// --------------
function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("abhishek")) // abhishek just logged in
// console.log(loginUserMessage()); // undefined just logged in => after the if statement = Please enter a username



// ----------REST OPERATOR--------------------------------
//-----------------multiple prices adding to the shopping cart (using ... operator)-----------
function calculateCartPrice(...num1){ // ... is also called rest operator and also called spread operator according to the needs. // here called rest operator
    return num1
}
console.log(calculateCartPrice(200 , 300 , 400)); // it will convert to array [ 200, 300, 400 ]

// ---- using objects via function------
const user = {
    username: "Abhishek" ,
    price: 199
}
function handleObeject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}
// handleObeject(user) // Username is Abhishek and the price is 199

// also can do like

// handleObeject({
//     username: "Abhishek" , 
//     price: 455
// })

// ---------arrays in function-------------
const mynewArray = [200 , 50 , 450 , 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(mynewArray)); // 50
// can also do like
// console.log(returnSecondValue([200,50,100,50])); // 50


