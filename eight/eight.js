let btn = document.querySelectorAll('button');
btn[0].onclick = (e) => {
    alert('This button was clicked once');
    console.log(e);
    console.log(e.clientX, e.clientY);
    console.log("button");
    let num = 25;
    num += 1;
    console.log(num);
    console.log(e.type); //returns the type of event
    console.log(e.target); //returns the target
}
btn[1].ondblclick = () => {
    alert('This button was clicked twice');
}
let div_1 = document.querySelector('div');
div_1.onmouseover = (evt) => {
    console.log('You are inside div');
    console.log(evt);
    console.log(evt.clientX, evt.clientY);
    console.log(evt.type);
    console.log(evt.target);
}
btn[2].addEventListener('click', (evt) => {
    console.log('3rd button was clicked');
    console.log(evt);
    console.log(evt.target);
    console.log(evt.type);
});
const handler_3 = () => {
    alert('Hello');
    console.log('Hello');
}
btn[2].addEventListener('click', handler_3);
btn[2].removeEventListener('click', handler_3);