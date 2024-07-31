console.log('Hello World');
//This is a single line comment
/* This is
a multi line comment */
//Arithmatic operators
let a = 5;
let b = 2;
let c = a + b;
console.log(a + b);
console.log('a + b =', c);
console.log('a =', a, '&', 'b =', b);
console.log('a - b =', (a - b));
console.log('a * b =', (a * b));
console.log('a / b =', (a / b));
console.log('a % b =', (a % b));
console.log('a ^ b =', (a ** b));
//Unary operators
console.log('a =', a, '&', 'b =', b);
a = a + 1;
console.log(a);
b++;
console.log(b);
//a = a + 1 or a++ or ++a or a += 1 all are same
console.log('++a =', ++a);
console.log('a++ =', a++);
console.log('a =',  a);
//Assignment operators
let $num_1 = 5;
let $num_2 = 2;
$num_1 += 2;
console.log($num_1);
$num_2 *= 10;
console.log($num_2);
$num_2 %= 7;
console.log($num_2);
//Comparison operators
a = 10;
b = 7;
let num = 10;
console.log('is 10 = 7? =', a == b);
console.log('is 10 = 10? =', a == num);
console.log('10 is not equal to 10 =', a != num);
console.log(a != $num_1);
let num1 = 5;
let str1 = '5';
console.log(num1 == str1); // Output is true
console.log(num1 === str1); //Output is false, because '===' comparison operators check for equality of values as well as the datatype of the values
let num_2 = 10;
let str_2 = '10';
console.log("10 is not equal to '10' =", (num_2 != str_2)); //false
console.log("10 is not equal to '10' =", (num_2 !== str_2)); //true
let $number_1 = 10;
let $number_2 = 5;
let $number_3 = 10;
console.log('is 10 > 5 ? :', ($number_1 > $number_2)); //true
console.log('is 10 < 5 ? :', ($number_1 < $number_2)); //false
console.log('is 10 >= 10 ? :', ($number_1 >= $number_3)); //true
console.log('is 10 <= 10 ? :', ($number_1 <= $number_3)); //true
//Logical operators
let _num1 = 6;
let _num2 = 5;
let $cond_1 = ((_num1) > (_num2)); //true
let $cond_2 = ((_num1) == 6); //true
let $cond_3 = ((_num2) == (_num1)); //false
console.log("cond 1 && cond 2 =", ($cond_1 && $cond_2)); //true
console.log("cond 1 && cond 3 =", ($cond_1 && ((_num2) == (_num1)))); //false
console.log("cond 1 or cond 3 =", ($cond_1 || ((_num2) == (_num1)))); //true
console.log("!(cond 1) =", !($cond_1)); //false (not gate)
console.log("!(cond 3) =", !($cond_3)); //true (not gate)
//conditional statements
let age = 20;
if (age >= 18) {
    console.log('Can vote');
} if (age < 18) {
    console.log('Cannot vote');
}
let color = undefined;
mode = 'dark-mode';
if (mode == ('dark-mode')) {
    color = '#000';
} else {
    color = '#fff';
}
console.log(color); // #000
//checking odd even of a number
let $number = 6;
if(($number % 2) === 0) {
    console.log('The number is even');
} else {
    console.log('The number is odd');
} //even in this case
let _mode = 'dark';
if (_mode === 'dark') 
    console.log(_mode); /* if there is only one if statement to execute and the condition that need to checked bu the if statement is also 
one then we dont have to use {} to write the code, we can write in a single line or in a next line */
let $age = Number(prompt('Enter your age : '));
if ($age <= 18) {
    console.log('Junior');
} else if($age > 60) {
    console.log('Senior');
} else {
    console.log('Middle');
} // output is based on user input
//Ternary operators : Work on 3 operands
let marks = undefined;
marks = prompt('Enter your marks');
let result = (marks >= 30) ? 'Pass' : 'Failed';
let bool = Boolean(prompt('true or false'));
console.log(result);
let _age = prompt('Enter your age');
(_age >= 18) ? console.log('Adult') : console.log('Child') // we can check for more than one condition using both conditional and logical operators but we can't evaluate more than one expression in a ternary operator.
//Practice questions
//question 1
let num_ = Number(prompt('Enter a number:')); //if we input anything into a prompt it will return the input as a string, so we have to explicitly typecast the datatype into the desired datatype, for example if we want boolean value and we have entered true than the true will become a string and we have to explicitly cast 'true' into a boolean true with built in method like Boolean('true'), same we can convert a number string like '10' to 10 using built in method which is Number('10').
if((num_ % 5) === 0) {
    console.log(`${num_} is a multiple of 5`);
} else {
    console.log(`${num_} is not multiple of 5`);
}
alert('First question done');
//question 2
let $mark = prompt('Enter your mark');
if($mark >= 80 && $mark <= 100){
    console.log('Grade A');
} else if($mark >= 70 && $mark < 80) {
    console.log('Grade B');
} else if($mark >= 60 && $mark < 70) {
    console.log('Grade C');
} else if($mark >= 50 && $mark < 60) {
    console.log('Grade D');
} else if($mark >= 0 && $mark < 50) {
    console.log('Grade F');
} else {
    console.log('Enter your marks correctly');
}
alert('Second question done');
//Homework
//Switch case - Not used much but good to have it's knowledge
let day = Number(prompt('Enter your date (1 - 7)'));
switch(day) {
    case 1 : console.log('Today is Monday');
             break;
    case 2 : console.log('Today is Tuesday');
             break;
    case 3 : console.log('Today is Wednesday');
             break;
    case 4 : console.log('Today is Thursday');
             break;
    case 5 : console.log('Today is Friday');
             break;
    case 6 : console.log('Today is Saturday');
             break;
    case 7 : console.log('Today is Sunday');
             break;
    default : console.log('Invalid input please try again');
              break;
} 
alert('Homework Done');