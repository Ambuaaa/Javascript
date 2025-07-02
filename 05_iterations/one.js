// for 
for (let i = 0; i < 10 ; i++) {
    const element = i ;
    if(element == 5 ){
        // console.log("Bro 5 is the best number")
    }
    // console.log(element);
       
}
// --------------------------------

// multi loop 
for(let i = 0 ; i<=10 ; i++){
    // console.log(`Outer loop value: ${i}`);
    
    for(let j = 0 ; j <=10 ; j++){
        // console.log(`Inner loop value ${j} and inner loop${i} `);
        // console.log(i + '*' + j + '=' + i*j);
        
        
    }
}

// --------------------

let myArrray = ["flash " , "Batman" , "superman"]
console.log(myArrray.length) ;
for(let i = 0 ; i < myArrray.length ; i++){
    const element = myArrray[i] ;
    console.log(element) ;
}
// Note - there is no out of bounds or exeption cases written when we litreally go out of the bounds . It shows "undefined" .

//-------break and continue ----------

// break
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break ;  
    }
    console.log(`Value of i is ${index}`);
}

// continue
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue ;  
    }
    console.log(`Value of i is ${index}`);
}

