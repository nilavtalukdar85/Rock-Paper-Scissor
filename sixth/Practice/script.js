let heading = document.querySelector('h2');
console.log(heading.innerText);
let append_String = ' from Apna College students';
heading.innerText = heading.innerText.concat(append_String);
let box = document.querySelectorAll('.box');
for(let i = 0; i < box.length; i++) {
    box[i].innerText = `Box ${(i + 1)}`;
}
heading.style.textAlign = 'center';
heading.style.color = '#0000ff';