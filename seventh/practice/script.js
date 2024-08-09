//1st question
let button = document.createElement('button');
button.innerText = 'Click Me !';
button.style.backgroundColor = 'rgb(255, 0, 0)';
button.style.color = '#fff';
let body = document.querySelector('body');
body.prepend(button);
//2nd question
let para = document.querySelector('p');
para.classList.add('newClass');