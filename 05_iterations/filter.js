// Suppose we are trying to store the value of log in some variable

const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

const values = coding.forEach((item) => {
    console.log(item); // js ruby java python cpp
    return item 
}) 
console.log(values); // undefined 

// for each don't return the value ... Hence we use .filter() .
/* 
For the above example if we use filter it would be 

const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.filter((item) => {
    return item.length > 3;
});

console.log(values); // ✅ Output: [ 'ruby', 'java', 'python' ]
*/  

// ----------.filter()-----------------------

const myNums = [1,2,3,4,5,6,7,8,9,10] 

const newNums = myNums.filter((num) => num>5) // callback function and then condition

console.log(newNums); // [ 6, 7, 8, 9, 10 ]

// ---

const myNum = [1,2,3,4,5,6,7,8,9,10] 
const newNum = myNum.filter( (num) => {
     num > 4  // if we open the scope{ } , we have to use return keyword , otherwise the value will be [] empty bracket. Hence correct suntax = return num>4
})

console.log(newNum); // [ ]

// If we want to return without using .filter() we use

const newnumss = []

myNum.forEach( (item) => {
    if(item>4){
        newnumss.push(item)
    }
} )
console.log(newnumss); // [ 5, 6, 7, 8, 9, 10 ]

// real world example 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
// suppose we have to filter the data which has the genre of only "history" 
let userBook = books.filter( (bk) => bk.genre ==='History' )

console.log(userBook);

// suppose user needs all books which has been published after 1990 and genre is history
let result = books.filter( (bk) => bk.publish >= 1990 && bk.genre === 'History')
console.log(result);

