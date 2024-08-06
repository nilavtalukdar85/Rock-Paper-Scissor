//Functions and methods
function myFunction() {
    console.log('Welcome to Apna College');
    console.log('We are learning JS :)');
}
myFunction();
function myMsg(msg) {
    console.log(msg);
}
myMsg('I love JS');
function sum(num1, num2) {
    return num1 + num2;
}
console.log(`Number 1 + Number 2 = ${sum(5, 4)}`);
const minus = (num1, num2) => {
    let result = num1 - num2;
    return result;
}
console.log(minus);
let minusResult = minus(5, 4);
console.log(`Number 1 - Number 2 = ${minusResult}`);
const printHello = () => {
    console.log('Hello');
}
printHello();
const helloWorld = () => console.log('Hello World');
helloWorld();
//Practice questions
//1st question 
function _string(string) {
    let count = 0;
    for(let val of string) {
        if(val == 'a' || val == 'e' || val == 'i' || val == 'o' || val == 'u') {
            count++;
        }
    }
    return count;
}
let noOfVowels = _string('Nilav');
console.log(`No. of vowels = ${noOfVowels}`);
//2nd question
const countVowels = (string) => {
    let count = 0;
    for(let char of string) {
        if(char == ('a')|| char == ('e') || char == ('i') || char == ('o') || char == ('u')) {
            count++;
        }
    }
    return count;
}
let _vowels = countVowels('apna College');
console.log(`No. of vowels = ${_vowels}`);
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printValue(val) {
    console.log(val);
});
let city = ['Delhi', 'Mumbai', 'Pune'];
city.forEach((val, idx, city) => { //Two optional parameters, 1st one is for index, and 2nd one is for the array itself
    console.log(val.toUpperCase(), idx, city); 
}); //Arrow functions are generally used as a callback functions for forEach method
console.log('Higher order functions are those which take another function as a parameter or return a function');
console.log('For ex : forEach() is a higher order method');
//Practice question
//Question 1
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, i) => {
    console.log(`Number ${i + 1} = ${number ** 2}`);
});
const sum_ = (number) => {
    console.log(number + 1);
}
numbers.forEach(sum_);
let even_Nums = [2, 4, 6, 8, 10];
even_Nums.map((val) => {
    console.log(val);
});
let newArray = even_Nums.map((val) => {
    return (val * val);
});
console.log(newArray);
let numbers_ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even_Array = numbers_.filter((number) => {
    return ((number % 2) == 0);
});
console.log(even_Array);
let _arr = [1, 2, 3, 4, 5];
let output = _arr.reduce((pre, curr) => {
    return (pre + curr);
}) //15
console.log(output);
let largest = _arr.reduce((pre, curr) => {
    return (pre > curr ? pre : curr);
});
console.log(largest);
//Practice question
//1st question
let marks = [92, 87, 83, 74, 98];
let toppers = marks.filter((mark) => {
    return (mark > 90);
});
console.log(toppers);
//2nd question
let $arr = [];
let n = prompt('Enter a number');
for(let i = 0; i < n; i++) {
    $arr[i]  = (i + 1);
};
let sumResult = $arr.reduce((previous, current) => {
    return (previous + current);
});
console.log(`Sum of the numbers = ${sumResult}`);
let productResult = $arr.reduce((previous, current) => {
    return (previous * current);
});
console.log(`Product of the numbers = ${productResult}`);