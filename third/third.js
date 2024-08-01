//loops
//For loop
for(let i = 1; i <= 5; i++) {
    console.log('Apna College'); //will execute 5 times
}
console.log('Loop has ended');
//sum of 1 to 5
let sum = 0;
for(let i = 1; i <= 5; i++) {
    sum = sum + i;
} 
console.log(`1 + 2 + 3 + 4 + 5 = ${sum}`); //15
for(var i = 1; i <= 5; i++) {
    console.log(`i = ${i}`);
}
console.log(i);
//While loop
let count = 0;
while(count < 10) {
    console.log(count); // here count, i or val are called iterator which are generally used to iterate over a number of values in a loop
    count++;
}
let $count = 20;
do {
    console.log('Apna-College');
    $count += 1;
} while($count <= 20);
//For-of loop
let str = 'Javascript';
for(let val of str) {
    console.log(`val = ${val}`);
}
//length of a string using for of loop
let length = 0;
for(let val of str) {
    length += 1;
}
console.log(`Length of the string is ${length}`); //output is 10, because we are increasing the size of string by 1 for each iteration of the loop
const student = {
    $full_Name : 'Nilav Talukdar',
    $age : 20,
    $cgpa : 6.72,
    $is_Pass : true
};
for(let key in student) {
    console.log(`key = ${key}, value = ${student[key]}`);
}
//Practice questions
//question 1
for(let i = 0; i <= 100; i++) {
    if((i % 2 == 0)) {
        console.log(`even i = ${i}`);
    }
}
//guessing game
let $game_Num = 25;
// let val = Number(prompt('Enter the number'));
let val = 25; //temporary
while(val != $game_Num) {
    val = Number(prompt('Wrong value please enter again'));
}
// alert('You have entered correct value');
//Strings
let _str1 = 'Apna College';
console.log(`Length of the string is ${_str1.length}`);
for(let i = 0; i < (_str1.length); i++) {
    console.log(`str[${0}] = ${_str1[i]}`); //accessing the characters of a string using the indices of the string using a for loop
}
//Escape characters
console.log("Apna\nCollege"); //Length of string is 12
console.log("Apna\tCollege"); //even though '\t' consists of two characters it is considered as one character, no matter how many characters are contained by an escape character, it will be counted as one character only, simply escape characters are considered as one character
//String methods
let _string = 'Apna College' //Strings are immutable in js
_string = _string.toUpperCase();
console.log(_string);
console.log(_string.toLowerCase());
console.log(_string.trim()); //Only remove the whitespaces in the first and last part of the strings in js
_stringNew1 = '   Apna college';
console.log(_stringNew1);
_stringNew1 = _stringNew1.trim();
console.log(_stringNew1);
let _stringNew2 = '0123456';
console.log(_stringNew2.slice(1, 5));
console.log(_stringNew2.slice(4));
let $string_1 = 'Apna' + ' ';
let $string_2 = 'College'
console.log($string_1.concat($string_2));
console.log($string_1.replace('A', 'a'));
console.log($string_2.replace('e', 'a'));
console.log($string_2.replaceAll('e', 'a'));
console.log($string_1.charAt(2));
//Practice question
//1st question
let $name = prompt('Enter your name');
$name = $name.toLowerCase();
$name = $name.trim();
let len = $name.length;
$name = '@'.concat($name);
$name = $name + len;
alert(`Your username is ${$name}`);