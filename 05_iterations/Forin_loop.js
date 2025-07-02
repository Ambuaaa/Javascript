// for in 

// -----Objects ------

const myObject = {
    js : "JavaScript",
    cpp: "C++",
    rb : "Ruby",
    swift : "Swift by Apple"
}

for(const c in myObject){
    // console.log(`${c} is the shortcut of ${myObject[c]}`);
    
}

/*
// this will print the key of the object(myObject here )
for (const c in myObject){
    console.log(c);
}

// this will print the value of the object(myObject here )

for (const c in myObject){
    console.log(myObject[c]);
    
}
*/

// ------ Arrays------

const programming = ["js" , "rb" , "py" , "java", "cpp"]
for(const c in programming){
    console.log(c); // the answer is - 0 , 1 , 2 , 3 , 4
    // Only keys of arrays are printed
    
}

// hence for values we have to do 

const programmingg = ["js" , "rb" , "py" , "java", "cpp"]
for(const c in programmingg){
    console.log(programmingg[c]); // the answer is - js , rb , cpy , java , cpp
    // Values of arrays are printed
    
}

//-------- Maps----------
// Not possible , because forin works for objects and maps are not plain objects 
