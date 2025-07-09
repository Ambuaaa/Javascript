// generate a random colour 

const randomColor = function(){
  const hex = "0123456789ABCDEF" ;
  let color = '#' ;
  for(let i = 0 ; i<6 ; i++){
    color += hex[Math.floor(Math.random() * 16)] ; // What happens if you use hex[i] instead? => Final color would always be: #012345 ← not random 
  }
  return color ; 
} ;

let intervalID ;

const startChangingColor = function(){
  console.log("started")
  if(!intervalID){
    intervalID = setInterval(changeBg , 1000);
  }
  function changeBg(){
    document.body.style.backgroundColor = randomColor() ;
    console.log(randomColor()) ;
  }
}

const stopChangingColor = function(){
  console.log("stopped")
   clearInterval(intervalID) ;
   intervalID = null ;
}

document.querySelector('#start').addEventListener('click' , startChangingColor)

document.querySelector('#stop').addEventListener('click' , stopChangingColor)

