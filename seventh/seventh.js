let div = document.querySelector('div');
let attr_Val = div.getAttribute('id');
console.log(attr_Val);
let para = document.querySelector('.para');
let val = para.getAttribute('class');
console.log(val);
para.setAttribute('class', 'para_1');
val = para.getAttribute('class');
console.log(val);
let box = document.querySelector('#box')
console.log('box');
div.style.backgroundColor = 'aquamarine';
div.innerHTML = '<h2>This is a div</h2>';
div.style.border = '1px solid blue';
let para_2 = document.querySelector('.para_2');
para_2.style.visibility = 'hidden';
let text_val = para_2.textContent;
console.log(text_val);
let newButton = document.createElement('button');
console.log(newButton);
console.dir(newButton);
newButton.innerHTML = '<button>Click Me !</button>'
let newDiv = document.querySelector('.btn');
newDiv.prepend(newButton); //Adds element at the starting of node
newDiv.append(newButton); //Adds element at the ending of node
newDiv.before(newButton); //Adds element before the node
newDiv.after(newButton); //Adds element after the node
newButton.style.padding = '0px';
let para_3 = document.querySelector('.para_3');
para_3.remove();