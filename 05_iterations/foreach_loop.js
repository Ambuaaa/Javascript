// For each loop

const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

coding.forEach( function (item) { // the function is call back , so we don't give any name of the function
        console.log(item); // js ruby java python cpp
        
} )

// -----One more variation(using arrow function)-----

const codding = ["js" , "ruby" , "java" , "python" , "cpp"]
codding.forEach( (i) => {
    console.log(i); 
    
} )

// -----In fucntion----------

function printMe(item){
    console.log(item);
   
}

coding.forEach( printMe ) // js ruby java python cpp

/*
📌 Key Concepts Involved:

1. Higher-Order Function
forEach() is a higher-order function because it takes another function (printMe) as an argument.

2. Callback Function
printMe is a callback — a function passed into another function to be called later.

3. Function Reference
You're passing the name of the function (printMe), not calling it (no printMe()).

JavaScript will call it for each element of the array.

*/


// -------foreach()has also some--------
coding.forEach( (item , index , arr) =>{
    console.log(item , index , arr);
} )

/*  Output 

js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

*/
        

// ------For each in "Objects in arrays" (Very important----------

const myCoding= [
    {
        languageName : "Javascript" ,
        languageFileName : "js"
    },
    {
        languageName : "Java" ,
        languageFileName: "java"
    },
    {
        languageName : "Python" ,
        languageFileName : "py"
    },
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
    
} )

