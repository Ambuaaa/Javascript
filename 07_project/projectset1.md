# Projects related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-fw79hmev?file=index.html)

# Solution code

## Project 1 - Background Color changer

```javascript
const buttons = document.querySelectorAll('.button') ;// 1) Selecting elements with buttons because in future we can loop 
const body = document.querySelector('body') ; // because we have to change body


buttons.forEach( (button) => {
  console.log(button) ;
  button.addEventListener('click' , (event) => {
    console.log(event)
    console.log(event.target) // ki event aa kahan se raha hai 
    if(event.target.id === 'grey'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'white'){
      body.style.backgroundColor = event.target.id ;
    }
    if(event.target.id === 'blue'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'yellow'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'purple'){
      body.style.backgroundColor = event.target.id ; 
    }
  });
});

```

## Project 2 - BMI calculator
``` javascript


const form = document.querySelector('form') ;
// this usecase will give you empty value 
form.addEventListener('submit' , (e) => {
  e.preventDefault(); // preventing to submit(default)

  const height = parseInt(document.querySelector('#height').value) ; // pareseINt because the value will be in string so we have to convert it to int
  const weight = parseInt(document.querySelector('#weight').value) ;
  const results= document.querySelector('#results') ;

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}` ; 
  }
  else if(weight === '' || weight <0 || isNaN(weight)){
    weight.innerHTML = `Please give a valid weight &{weight}` ;
  } else{
    const bmi = (weight / ((height*height) / 10000)).toFixed(2);
    // we have to display this bmi in the results
    const result = results.innerHTML = `<span>${bmi}</span> <br>`; // span because of  HTML structure.
    if(result<18.6){
      results.innerHTML = ` ${bmi} = Under Weight` ; 
    }
    if(18.6<result<24.9){
      results.innerHTML = `${bmi} = Normal Range` ; 
    }
    if(result>24.9){
      results.innerHTML = `${bmi} = Overweight` ; 
    }
  }

});

```
``` javascript
## Project 3 - Digital clock

// how to display time

const clock = document.getElementById("clock") ;
// const clock = document.querySelector('#clock') 



//setInterval() is a built-in JavaScript function that repeatedly runs a function at fixed time intervals (in milliseconds)
// setInterval(function(){} , 1000)

setInterval(() => {
  let date = new Date() ;
  clock.innerHTML = date.toLocaleTimeString() ;
}, 1000);

```

## Project-3 Guess the number

```javascript


// to generate random number from 1 to 100
let randomnumber = (parseInt(Math.random()*100 +1 ));

const submit = document.querySelector('#subt') ; 
const userinput = document.querySelector('#guessField') ;
const guessSlot = document.querySelector('.guesses') ; 
const remaining = document.querySelector('.lastResult') ;
const loworhigh = document.querySelector('.lowOrHi') ;
const startover = document.querySelector('.resultParas') ;

const p = document.createElement('p')

let prevGuess = [] // to display the guesses user already had entered
let numGuess = 1 // number of total guesses user has entered(max 10 here)

let playGame = true ; // to start the game

if(playGame){
  submit.addEventListener('click' , (e) =>{
    e.preventDefault() ; 
    const guess = parseInt(userinput.value) ;
    console.log(guess) ;
    validateGuess(guess) ;
  }) ;
}

// valid number diya hai na
function validateGuess(guess){ 
  if(isNaN(guess)){
    alert('Please enter a valid number') ;
  }
  else if(guess<1 ){
    alert('Please enter a number more than 1') ;
  }
  else if (guess>100){
    alert('Please enter a number less than 1')
  }
  else{
    prevGuess.push(guess) ;
    if(numGuess>10){
      cleanupGuess(guess)
      displaymessage(`Game Over. Random number was ${randomnumber}`)
      endGame() ;
    }else{
      cleanupGuess(guess) ;
      checkGuess(guess) ;
    }
  }

}

//to check the guess and print
function checkGuess(guess){
  if(guess === randomnumber){
    displaymessage("Congratulations . you guessed it right") ;
  }
  else if(guess > randomnumber){
    displaymessage("Enter lower number")
  }
  else if(guess < randomnumber){
    displaymessage("Enter higher number")
  }
}

// clean the value for next , update the guess 
function cleanupGuess(guess){
  userinput.value = '' ; // to clean the user value 
  guessSlot.innerHTML += `${guess} , ` // show the value 
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

// to manupulate in DOM and print
function displaymessage(message){
  loworhigh.innerHTML = `<h2>${message}</h2>`
}

// to start and end game

function endGame(){
  userinput.value = '' ; // cleaned the userinput
  userinput.setAttribute('disabled' , '') //Disables the input so the user can't type anymore.
  p.classList.add('button') // Adds the CSS class button to a <p> element (likely to style it).
  p.innerHTML = '<h2 id="newGame"> new Game </h2>' // Sets the content of p to a heading with ID newGame.
  startover.appendChild(p) ; // Adds this p element to the startover container (maybe to show the "New Game" button).
  playGame = false ; // Sets a flag to indicate the game has ended.
  newGame() ;
}
function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click' , (e) =>{
    randomnumber = (parseInt(Math.random()*100 +1 ));
    prevGuess = [] ;
    numGuess = 1 ;
    guessSlot.innerHTML =''
    remaining.innerHTML = `${11 - numGuess}` ; 
    userinput.removeAttribute('disabled')
    startover.removeChild(p) ;
    playGame = true ;
  });
}





```