console.log(2 > 1); // true
console.log(2>= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true 

console.log("2" > 1 );
console.log("02" > 1 );

// when you compare please check the the typeof datatype kyuki bht baar predictable result nahi aaega

console.log(null > 0 ); // false
console.log(null == 0 ); // false
console.log(null >= 0 ); // true lol

// Reason
// equality check == and comaprisons > ,<, >=, <=, work differently 
// Comparisons convert null to a number , treating it as 0
// thats why null >= 0 is true and null > 0 is false 

/// === (strict check)
console.log("2" == 2); // true
console.log("2" === 2 ); // false because of strict check , also checking the datatype








