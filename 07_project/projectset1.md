# Projects related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-fw79hmev?file=index.html)

# Solution code

## Project 1

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