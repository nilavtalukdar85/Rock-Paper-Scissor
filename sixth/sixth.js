console.log('Apna College');
// alert('Apna College'); webpage is not loaded until the alert or prompt popup window of js is gone 
// prompt('Your name ?');
window.console.log('Hello');
//Window object represents a open window in a browser, it is a browser's object not of javasctipt. It is a global object with lots of properites and methods
console.log(document); //prints the object
console.dir(document); //prints the properties and methods of the object
console.log(document.body);
console.log(document.head);
console.log(document.body.childNodes[1]);
document.body.style.background = "lime";
// document.body.childNodes[3].innerText = 'abcd';
let heading = document.getElementById('heading'); //will return null
console.log(heading);
console.dir(heading);
let headings = document.getElementsByClassName("heading-class"); //returns an HTML Collection consisting of different elements
console.log(headings); //In this case it will return an empty HTML Collection
console.dir(headings);
let button = document.getElementById('myId');
console.log(button);
console.dir(button);
let paras = document.getElementsByTagName('p');
console.log(paras);
let firstEl = document.querySelector('p'); //returns the first p element
console.dir(firstEl);
let allEl = document.querySelectorAll('p');
console.dir(allEl); //returns a node list
let headAll = document.querySelectorAll('.heading');
console.log(headAll);
console.log(firstEl.tagName); //Return the tag name
//DOM tree has three types of nodes - element nodes, comment nodes, text nodes
document.querySelector('div').children;
let div = document.querySelector('div');
console.log(div.innerText); //Returns the text of the element as well as the text of it's child nodes
console.log(div.innerHTML); //Same as innerText but also returns the tags
let header = document.querySelector('h1');
header.innerText = 'New heading';
header.innerHTML = '<i>New heading</i>';
let subHeading = document.querySelector('h3');
console.log(subHeading);
console.log(subHeading.innerText); //returns an empty string because visibility is hiddent
console.log(subHeading.textContent); //returns the text content