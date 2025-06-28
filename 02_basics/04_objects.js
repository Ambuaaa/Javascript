// const tinderUSer = new Object () // singleton object
const tinderUSer = {} // literal object

tinderUSer.id = "123abc" 
tinderUSer.name = "Abhishek"
tinderUSer.isLoggedIn= false 

console.log(tinderUSer); // { id: '123abc', name: 'Abhishek', isLoggedIn: false }

const regularUser = {
    email : "abhishek@gmail.com",
    fullname: { // we can also create nested objects
        userFullName:{
            firstname: "Abhishek" , 
            lastname: "Kumar"
        }
    }
}
console.log(regularUser.fullname.userFullName.firstname); // Abhishek

// combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// // object.assign() //static method copies enumerable own properties from one or more source objects to a target object.=> IT RETURNS THE MODIFIED TARGET OBJECT
// const obj4 = Object.assign({} , obj1 , obj2 , obj3) // {} isth target and all other are source
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj4 = {...obj1 , ...obj2 , ...obj3} // more used
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//object of array
const user = [
    {
        id: 1 ,
        email: "ansdh@gmail.com"
    },
     {
        id: 1 ,
        email: "ansdh@gmail.com"
    },
     {
        id: 1 ,
        email: "ansdh@gmail.com"
    },
     {
        id: 1 ,
        email: "ansdh@gmail.com"
    },
     {
        id: 1 ,
        email: "ansdh@gmail.com"
    },
     {
        id: 1 ,
        email: "ansdh@gmail.com"
    },
     {
        id: 1 ,
        email: "ansdh@gmail.com"
    }, 
    
]
user[1].email // it is array so we can use this property
//---------------
console.log(tinderUSer); // { id: '123abc', name: 'Abhishek', isLoggedIn: false }

console.log(Object.keys(tinderUSer)); // to obtain all keys in datatype - array => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUSer)); // to obtain all values in datatype => [ '123abc', 'Abhishek', false ]

console.log(tinderUSer.hasOwnProperty('isLoggedIn')); // true ......... to check that if this property is still there or not => gives result in the boolean

// -----------------------Lecture 5--------------------------------

// Object Destructuring

const course = {
    coursename: "Js in hindi" ,
    price: "999" ,
    courseInstructor: "Hitesh" ,
}
// console.log(course.courseInstructor); // HItesh .. the name courseInstructor is so big .Hence we want to deconstruct it

const {courseInstructor: instructor} = course // {} after const
console.log(instructor);

//---------JSON ---------------
// JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
// syntax => Data is in name value pair . Key must alwasy be in string . Hence " " is used , Values can be: string, number, object, array, boolean, or null , Curly braces {} hold objects and Square brackets [] hold arrays

// {
//     "name": "abhishek" ,
//     "coursename": "js in hindi"
//     "price" : "free"
//     "address": {
//         "city": "patna" ,
//         "country": "India"
//     }
//     "skills": ["DSA" , "WEbD" , "Linux"]
// }






    





