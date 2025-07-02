// ------------Map function------------

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map( (nums)  =>  nums + 10)
console.log(newNums); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Using the same above thing with the use of for each loop 

const nmmm = [1,2,3,4,5,6,7,8,9,10]

let anyNumb = []
nmmm.forEach( (item) => {
    anyNumb.push(item + 10 )
})
console.log(anyNumb);

// Use .map() when you want to transform data
// Use .forEach() when you want to perform actions on each item

// -------Chaining-----------

const numbers = [1,2,3,4,5,6,7,8,9,10]

const newnumbers = numbers
                        .map( (num) => num * 10 ) // iska jo bhi result hai wo second wale me pass ho jata hai .. Usi ko chaining kehte hai // [10,20,30,40,50,60,70,80,90,100] 
                        .map( (num) => num + 1 ) // [11,21,31,41,51,61,71,81,91,101]
                        .filter ((num) => num>=40) // [41,51,61,71,81,91,101]

console.log(newnumbers);

