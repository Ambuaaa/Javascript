const score = 400 // normal way to define
console.log(score); // 400

// alternative way to define ( we can have many properties after having this )
const balance = new Number(100)
console.log(balance); // [Number: 100]

console.log(balance.toString()); // now the number 100 has become string ( As it has become string , we can now use many properties of the string over it)

console.log(balance.toString().length); // 

// for " add " precison value in the decimal number - tofixed()
console.log(balance.toFixed(2)); // 100.00

//for "rounding off " precison value in the decimal number - toPrecison()  
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); // 23.9

// for making the zeros look nicer 
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000
console.log(hundreds.toLocaleString()); // 100,000 ( by default )

// Note
// We can also have Number.MAX_VALUE , Number.MIN_VALUE in the JS

// ************** Maths *********************
// JS comes with bydefault Maths library

console.log(Math); // Object [Math] {} => we can see that math is an object with many properties ( can check in the inspect from console )
// using the properties 

console.log(Math.abs(-4)); // 4
console.log(Math.round(4.4)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4 , 3 , 8 , 6 , 5 )); // 3

// Math.random() => always gives value between 0 and 1
//
console.log(Math.random());
console.log( (Math.random() * 10) + 1 ); // shift value to the left 

// sometimes for finding value between th range

const min = 10 
const max  = 20 
console.log(Math.floor(Math.random() * (max - min + 1 ) + min )); // will give in the range of min+1 to max
// here instead of using * 10 we used (max - min + 1 ) . Remember this












