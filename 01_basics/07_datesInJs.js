// DATES 

let myDate = new Date() //  made object of Date ( Hence Date is an object )
console.log(typeof myDate); // object

console.log(myDate); //2025-05-19T15:30:48.838Z ( too complex)
console.log(myDate.toString()); // Mon May 19 2025 15:31:31 GMT+0000 (Coordinated Universal Time) 
console.log(myDate.toDateString()); // Mon May 19 2025
console.log(myDate.toISOString()); //2025-05-19T15:32:34.037Z
console.log(myDate.toJSON()); //2025-05-19T15:33:12.837Z

// how to write date manually
let myCreatedDate = new Date ( 2025 , 5 , 19 ) // month start from 0 in JS
console.log(myCreatedDate.toDateString()); // Thu Jun 19 2025

//another method
let anotherDate = new Date( "2023-06-19") 
console.log(anotherDate.toDateString()); // Mon Jun 19 2023

// FOR TIMESTAMP ( We get the timestamp bydefault in millsec)
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // we can use .getTime()

// we can convert this into sec (interview) using =
console.log(Date.now()/1000); // 1747672089.453

console.log(Math.floor(Date.now()/1000)); // 1747672089 ( Removing the decimal )

// we can also specifically check the month , day , etc
let newDate = new Date()
console.log(newDate); // 2025-05-19T16:30:36.757Z
console.log(newDate.getMonth()); // 4 
console.log(newDate.getDay()); // 1
console.log(newDate.getDate()); // 19 

// used in - `$(newDate.getDate() and the month is $(newDate.getMonth())`

// LAST => we can use the .toLocaleString to customize the dates we want ( use cnrl + space to see the extra option )
newDate.toLocaleDateString('default' , {
    weekday : "long", 
    dateStyle : "full",
    // timeZone : 
})

