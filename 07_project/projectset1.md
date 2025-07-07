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

``` javascript
## Project 2 - BMI calculator

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