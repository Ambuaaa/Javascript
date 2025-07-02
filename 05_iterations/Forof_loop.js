// arrays specific loop 

// for of

// ---in number---
const arr = [ 1 , 2 , 3 ,4 , 5 ]
for (const num of arr) { // int c : arr - you do int java , remember ?
    console.log(num);
}

// -----In string ----
const greetings = " Hello World! "
for(const c of greetings){
    if(c == " "){
        continue ;
    }
    // console.log(`Each char is ${c} `);
    
}

//-----Maps-----

// Stores unique value .

const map = new Map()
map.set("IN" , "India")
map.set("USA" , "United States of America")
map.set("FR" , "France")


console.log(map);

// If you want to insert loop in map 
/* 
for(const [key , value] of map.entries()){ // destructure of array in the [ key , value ]
    console.log(key , " " , value);   
}
*/

//------------Iteration in Objects ------------
const myObject = {
    "Game1 " : "NFS" ,
    "Game2" : "SpiderMan"
}
/* 
It won't run 

for(const [key , value] of myObject ){
console.log(key , ":-" value) ;
}

*/
 // In the "forin_loop" folder we will try to learn about objects


/* 
NOTES ABOUT MAP IN JS

✅ Definition:
A Map is a built-in object in JavaScript that allows storing key-value pairs, where keys can be of any data type (not just strings like in objects).

🧠 Key Features:
Maintains insertion order of keys.
Keys can be of any type (objects, functions, arrays, primitives).
Provides better performance for frequent add/remove operations.
Does not have prototype chain interference (unlike objects).

🧱 Syntax:

const map = new Map();
map.set(key, value);    // Add entry
map.get(key);           // Get value by key
map.has(key);           // Check if key exists
map.delete(key);        // Remove entry
map.clear();            // Remove all entries
map.size                // Get number of entries


🔁 Looping through Map:

// Using for...of loop
for (let [key, value] of map) {
  console.log(key, value);
}

// Using forEach
map.forEach((value, key) => {
  console.log(key, value);
});


🆚 Map vs Object
Feature	                    Map	                                Object
Key types	    ✅ Any (string, object, func)	    ❌ Only strings or symbols
Order of keys	✅ Preserved	                        ❌ Not guaranteed
Iteration	    ✅ Easy via for...of, forEach	    ❌ More complex (for...in)
Size property	✅ map.size	                        ❌ Object.keys(obj).length
Use case	    When key types vary / ordered data	  Simple structures / JSON-like data



*/