let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll('.img');
let i = 0;
let computer = document.querySelector('.computer');
let user = document.querySelector('.user');
let scoreBtn = document.querySelector('button');
let win = [];
choices.forEach((choice) => {
    win[i] = choice.getAttribute('id');
    i++;
});
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let user_Choice = choice.getAttribute('id');
        let comp_Choice = win[(Math.floor(Math.random() * win.length))];
        checkWinner(user_Choice, comp_Choice);
    });
});
const checkWinner = (user_Choice, comp_Choice) => {
    if (user_Choice == win[0] && comp_Choice == win[0]) {
        scoreBtn.innerText = 'Draw';
        scoreBtn.style.backgroundColor = '#000';
    }
    else if (user_Choice == win[0] && comp_Choice == win[1]) {
        scoreBtn.innerText = 'Computer Won';
        compScore++;
        computer.innerText = String(compScore);
        scoreBtn.style.backgroundColor = '#ff0000';
    }
    else if (user_Choice == win[0] && comp_Choice == win[2]) {
        scoreBtn.innerText = 'You Won';
        userScore++;
        user.innerText = String(userScore);
        scoreBtn.style.backgroundColor = '#32CD32';
    }
    else if (user_Choice == win[1] && comp_Choice == win[0]) {
        scoreBtn.innerText = 'You Won';
        userScore++;
        user.innerText = String(userScore);
        scoreBtn.style.backgroundColor = '#32CD32';
    }
    else if (user_Choice == win[1] && comp_Choice == win[1]) {
        scoreBtn.innerText = 'Draw';
        scoreBtn.style.backgroundColor = '#000';
    }
    else if (user_Choice == win[1] && comp_Choice == win[2]) {
        scoreBtn.innerText = 'Computer Won';
        compScore++;
        computer.innerText = String(compScore);
        scoreBtn.style.backgroundColor = '#ff0000';
    }
    else if (user_Choice == win[2] && comp_Choice == win[0]) {
        scoreBtn.innerText = 'Computer Won';
        compScore++;
        computer.innerText = String(compScore);
        scoreBtn.style.backgroundColor = '#ff0000';
    }
    else if (user_Choice == win[2] && comp_Choice == win[1]) {
        scoreBtn.innerText = 'You Won';
        userScore++;
        user.innerText = String(userScore);
        scoreBtn.style.backgroundColor = '#32CD32';
    }
    else if (user_Choice == win[2] && comp_Choice == win[2]) {
        scoreBtn.innerText = 'Draw';
        console.log('draw');
        scoreBtn.style.backgroundColor = '#000';
    }
}