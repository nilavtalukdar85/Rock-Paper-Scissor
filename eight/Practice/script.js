//Practice question
let box = document.querySelector('.box');
let btn = document.querySelector('button');
let current_Mode = 'light';
const btn_style = () => {
    if(current_Mode == 'light') {
        btn.style.backgroundColor = '#000'
        btn.innerText = 'Dark Mode';
        btn.style.color = '#fff';
        btn.style.border = 'none';
        current_Mode = 'dark';
    }
    else {
        btn.style.backgroundColor = '#fff'
        btn.innerText = 'Light Mode';
        btn.style.color = '#000';
        current_Mode = 'light';
        btn.style.border = '1px solid #000';
    }
}
const body_style = () => {
    if(current_Mode == 'light') {
        box.style.backgroundColor = '#000';
    }
    else {
        box.style.backgroundColor = '#fff';
    }
}
btn.addEventListener('click', btn_style);
btn.addEventListener('click', body_style);