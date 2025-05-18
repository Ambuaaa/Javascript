// string concatination (outdated version )

const name = "abhishek"
const repoCount = 50
// console.log(name + repoCount + " Value"); // This is old method and not preffered much

// Preferred syntax :- 
// String inter - polation - use backticks(``) and then dollar sign with curly brackets
console.log(`Hello my name is ${name} and my Github repository is ${repoCount}`);

// ANOTHER WAY TO DEFINE STRING (preferred)

const gameName = new String('abhishek-kumar') // we can access many method(function) using this method . It is key value pair
console.log(gameName[0]); // a
console.log(gameName.__proto__); // {} => it appers that it is an empty object , but there are many object as we can see in the console(after inspect) , we wll study it later

// using of some method ( we can use them directly )

console.log(gameName.length); // 14
console.log(gameName.toUpperCase()); //ABHISHEKKUMAR ( note :- it hasn't changed our original value because it uses stack memory )
console.log(gameName.charAt(3)); // i 
console.log(gameName.indexOf('k')); // 7

// to make a substring
const newString = gameName.substring(0 , 5)
console.log(newString); // abhis ( the last value is not included)

const anotherString = gameName.slice(-14 , 3) // slice work same as substring but can have negative value
console.log(anotherString); // abh ( -14 as 0 and 3 as 3)

// to trim extra space
const newStringOne = "    abhsihek    " // for removing extra space use - trim
console.log(gameName.trim());

// to replace
const url = "http://abhishek.com/abhishek%20kumar"
console.log(url.replace('%20' , '-')); // http://abhishek.com/abhishek-kumar
console.log(url.includes('jaani')); // false
console.log(url.includes('kumar')); // true

// to covert string into array ( on the basis of - here)
// use - split
console.log(gameName.split('-')); // [ 'abhishek', 'kumar' ]








 



