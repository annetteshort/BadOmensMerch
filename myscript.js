"use strict";

//light and dark mode
let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('change', ()=> {
  document.body.classList.toggle('dark');
});

//Game Mode
//get rando num
let x = math.floor(Math.random() * 11);
//counting num
let guessed = 1;
document.getElementById("guessSubmit").onclick = function() {
   let y = document.getElementById("guess").value;

  if (y == x){
       console.log("You won tickets to the nearest show to you!");
   } else {
       console.log("Sorry, not this time babes :(");
   }
}
