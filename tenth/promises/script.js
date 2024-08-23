//Print numbers from 1 - 3 with a delay of 2s each using callbacks, promises, async await
const numbers = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(num);
            resolve('Done');
        }, 2000);
    });
}
async function getNumbers() {
    await numbers(1);
    await numbers(2);
    await numbers(3);
}
getNumbers();