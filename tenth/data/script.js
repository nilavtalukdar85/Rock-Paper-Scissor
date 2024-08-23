let user_Id = document.querySelector('.email-data');
let pass = document.querySelector('.password-data');
let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    let username = user_Id.value;
    let $password = pass.value;
    const userName = (user) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`User name = ${user}`);
                resolve('success');
            }, 2000);
        });
    }
    const passWord = (user) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`Password = ${user}`);
                resolve('success');
            }, 2000);
        });
    }
    async function user() {
        console.log('Getting user name......');
        await userName(username);
        console.log('Getting password......');
        await passWord($password);
    }
    user();
    btn.disabled = true;
});