/*
        Memory
        Two types of memory - Stack and Heap memory

        1) Stack memory - Primitive datatype
        we get copy of variable when we declare stack memory 
       in stack memory, variables are copied by value, so when you assign a primitive variable to another, you get a copy, not a reference.

let myYoutubename = "abhishekdotcom";
let anotherName = myYoutubename ;

anothername = "Pentaphub";

console.log( myYoutubename); // abhishekdotcom
console.log(anotherName); // Pentaphub

       
        2) Heap memory - Non Primitve datatype

When you assign one reference variable to another, they both point to the same memory location — not a copy.
So if one is changed, the other reflects the change too.

let useOne = {
         email : "user@google.com" ,
         upi: "user@ybl"
         };
let userTwo = userOne ;      // Both userOne and userTwo point to the same object in heap

userTwo.email = "abhishek@gmail.com";

console.log(useOne.name); // Output: "Doe"
console.log(userTwo.email); // Output: "Doe"

*/