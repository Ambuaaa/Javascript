// ARRAYS - object


// diff types to declare
const myArr = [0 , 1 , 2 , 3 , 4 , 5 ]
const myHeros = [ "shaktiman " , " joker "]

const newArr1 = new Array ( 1 , 2 , 3 , 4 )
console.log(newArr1[1]);

// Array methods 

myArr.push(6)
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6  ]

myArr.push(7)
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6 , 7 ]

myArr.pop
console.log(myArr); // removes the last element 

myArr.unshift(9)
console.log(myArr); // adds the elemnt in the front ( though not optimised as we have to shift all the other numbers ) [ 9 , 0, 1, 2, 3, 4, 5, 6 , 7 ]

myArr.shift()
console.log(); // deletes the first element 

console.log(myArr.includes(9)); // true
console.log(myArr.indexOf(3)); // 3 (here)

const newArr2 = myArr.join() // convert it into string
console.log(newArr2); 
console.log(typeof newArr2); // string 

// SLICE , SPLICE 
 // slice() –  Does NOT modify original array . Used to extract. Works on arrays and strings.
// splice() – Modifies original array . Used to remove/replace/insert. Works on arrays only.


// here we are checking the orignial array , then chekcing clice and splice array that what they do and what they effect on the original array  
console.log("A" , myArr); // normal array => [ 0, 1, 2, 3, 4, 5, 6 , 7 ]


const myn1 = myArr.slice(1,3) // performing slice Operation 
console.log(myn1); // [1 , 2] => sliced element array of index 1 , 2 (last index not included)
console.log("B" , myArr); // B [0, 1, 2, 3, 4, 5, 6 , 7] => no changes to original array


const myn2 = myArr.splice(1 , 3 ) // performing splice Operation 
console.log(myn2); // [1 , 2 , 3 ] => sliced element array of index 1 , 2 , 3 (last index is included)
console.log("C" , myArr); // C [0 , 4 , 5 , 6 , 7 ] // chaaged the original array











