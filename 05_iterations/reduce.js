// reduce method 

// ------understanding using function ------
 const myNums = [1,2,3]

 const myTotal = myNums.reduce( function (acc , currval) {
    // console.log(`accumulator ${acc} and curval:- ${currval}`);
    
    return acc + currval  

 } ,0  )

 console.log(myTotal); // 6

 //----understanding using arrow function----
 
 const myNumss = [ 1 , 2 , 3 , 4 , 5 ]
 const mytotals = myNumss.reduce( (acc , currval) => acc + currval , 0 )

console.log(mytotals); //15

// example 

const shoppingCart= [
    {
        itemName: "js course" ,
        price : 2999
    },
      {
        itemName: "py course" ,
        price : 8000
    },  {
        itemName: "java course" ,
        price : 10099
    },  {
        itemName: "cpp course" ,
        price : 999
    },
]

// add all the prices of the shopping cart
const totalPrice = shoppingCart.reduce( (acc, item) => acc  + item.price , 0 )
console.log(totalPrice); // 22097

//-----Real world example-------

// Question - Write a function in js which i can use to equate sum of numbers of input which i prefer according to my mood

function numbersum( ...num){ // use REST operator
   return num.reduce( (arr , currval) => arr + currval , 0 )
}

// if i want to sum 
console.log(numbersum(10, 20, 30)) //60
console.log(numbersum(10, 20, 30 , 40 , 50 , 60 , 70)); //280

 