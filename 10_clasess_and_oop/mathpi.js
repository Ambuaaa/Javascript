// Question -
// Can we change the value of Math.pi which is 3.14..... in the Javascipt ?

// console.log(Math.PI); //3.141592653589793
// Math.PI = 5 ;
// console.log(Math.PI); // 3.141592653589793 // Overwriting don't work

// getOwnPropertyDescriptor tells some hidden things about object
const descripter = Object.getOwnPropertyDescriptor(Math , 'PI') // Math object ke andar PI ki properties dekhni hai to aise likhenge

// console.log(descripter);
/* Output
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

const chai = {
    name: 'ginger chai' ,
    price: '250' ,
    isAvaialble: 'true'
}
console.log(chai); // { name: 'ginger chai', price: '250', isAvaialble: 'true' }
// console.log(Object.getOwnPropertyDescriptor(chai)); // undefined => kiski property likhni hai wo to likha hi nahi 
console.log(Object.getOwnPropertyDescriptor(chai , 'name'));
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// Suppose we wanna iterate in that Object chai 
for(let [key,value] of Object.entries(chai)){
    console.log( `${key} ; ${value}` );
} 


// we want to change this property , use .defineProperties
Object.defineProperty(chai , 'name' , {
    writable: false ,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai , 'name'));
/*
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/
// hence now one cannot overwrite in it 
for(let [key,value] of Object.entries(chai)){
    console.log( `${key} ; ${value}` ); // price ; 250 isAvaialble ; true => hence we were not able to enumerate through the property 
} 





