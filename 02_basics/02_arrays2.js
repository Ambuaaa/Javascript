const marvel_heros = ["thor" ,"IronMan" , "SpiderMan"]
const dc_heros = ["superman" , "flash" , "batman" ]

// marvel_heros.push(dc_heros) // it don't merge normally , array ke andar array aa jaega
// console.log(marvel_heros); // [ 'thor', 'IronMan', 'SpiderMan', [ 'superman', 'flash', 'batman' ] ]
// for "flash" , we have to access through
// console.log(marvel_heros[3][1]); // flash

// -----------------------
// .concat - combines two or more arrays . This method return a new array without modifying any existing arrays.

// if we don't take new array 
marvel_heros.concat(dc_heros)
// console.log(marvel_heros); // [ 'thor', 'IronMan', 'SpiderMan', [ 'superman', 'flash', 'batman' ] ]

// if we take new array
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); //[ 'thor', 'IronMan', 'SpiderMan', 'superman', 'flash', 'batman' ]



// easy way to concat = spread operator [... operator]
const all_new_heros = [...marvel_heros , ...dc_heros]
console.log(all_new_heros); // [ 'thor', 'IronMan', 'SpiderMan', 'superman', 'flash', 'batman' ]

// flat 

