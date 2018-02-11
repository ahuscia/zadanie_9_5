// scripts.js

var buttons = document.getElementsByClassName('button');

console.log(buttons);

for(i=0; i<buttons.length; i++) {
   alert(buttons[i].innerText); 
}