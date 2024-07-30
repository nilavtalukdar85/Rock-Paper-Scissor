{
    let a = 5;
    console.log(a);
}
let a = 10;
console.log(a);

let fullName = 'Nilav Talukdar';
console.log(fullName);
typeof(fullName);

let x = null;
console.log(x);

let num = BigInt(20);
let $num = 30n;
let first = Symbol('Hello World!');

//objects
const student = {
    fullName : 'Nilav Talukdar',
    age : 20,
    cgpa : 6.72,
    isPass : true,
    gender : 'Male'
};

console.log(student);
//we frequently decleare our objects with const keyword
console.log(student["fullName"]);
console.log(student['age']);
console.log(student.gender);

student['cgpa'] = student.cgpa + 2;
console.log(student["cgpa"]);
student.fullName = 'Thanos';
console.log(student['fullName']);

console.log(student);
//Practice questions
//1st question
const product = {
    title : 'Ball pen',
    rating : 4,
    offer : 5,
    price : 270,
    isDeal : true
};
typeof(product);
console.log(product);
let $ex = '123' + 21;
console.log($ex);
//output is 12321 , in case of string + number, the number is merged into the end of the string
//For ex : 'abc' + 21 = abc21
//2nd question
const profile = {
    userName : 'shardhakhapra',
    isFollow : true,
    is_Msg : false,
    posts : 195,
    followers : 569000,
    following : 4,
    title : 'Shardha Khapra',
    threads_Id : '@shardhakhapra',
    subTitle : 'Entrepreneur',
    bio : 'Apna College | Ex-Microsoft, DRDO To educate someone is the highest privilege❤️'
};
typeof(profile);
console.log(profile);
console.log(typeof profile['username']);