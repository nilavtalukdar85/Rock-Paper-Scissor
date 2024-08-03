//Arrays in js
let marks = [97, 86, 75, 64, 36];
console.log(marks);
//Array properties
console.log(marks.length);
let heros = ["Ironman", "Hulk", "Thor", "Spiderman"];
console.log(heros);
console.log(marks[0]);
console.log(marks[2]);
console.log(marks[5]);
marks[0] = 100;
console.log(marks);
//looping over an array using for loop
for(let i = 0; i < heros.length; i++) {
    console.log(`Hero ${i + 1} = ${heros[i]}`);
}
//looping over an array using for of loop
for(let val of heros) {
    console.log(val);
}
let cities = ['Delhi', 'Pune', 'Hyderabd', 'Guragon', 'Banglore', 'Mumbai','Kolkata'];
for (let city of cities) {
    console.log(city.toUpperCase());
}
//Practice questions
//1st question
let $marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let mark of $marks) {
    sum += mark
}
let avgMark = (sum / ($marks.length));
console.log(`Avarage mark = ${avgMark}`);
//2nd question
let prices = [250, 645, 300, 900, 50];
for(let i = 0; i < prices.length; i++) {
    prices[i] -= (prices[i] * 0.10);
}
console.log(prices);
//Array methods
let cars = ['Lamborghini', 'Maruti', 'Honda', 'Ferrari'];
console.log(cars);
cars.push('Mclearn');
console.log(cars);
cars.push('Koenisegg', 'Buggati'); //We can push multiple items at the end of an array like this
console.log(cars);
let $deleted_Item = cars.pop(); //Deletes form the end of an array and returns the deleted value;
console.log(cars); //Makes the change in the originial array
console.log(`Deleted item = ${$deleted_Item}`);
let array_String = cars.toString(); //Converts the array to a string and returns it, doesn't make change in the original array
console.log(array_String);
let marvelHero = ['Iron Man', 'Captain America'];
let dcHero = ['Bat Man', 'Super Man'];
let villains = ['Thanos', 'Green Goblin'];
let hero = (marvelHero.concat(dcHero, villains));
marvelHero.unshift('Thor');
console.log(marvelHero); //Adds elements at the start of the array, make change in the original array
let _deleted = marvelHero.shift();
console.log(marvelHero) //Remove element from the start of the array, make change in the original array, returns the deleted item
console.log(`Deleted Item = ${_deleted}`);
console.log(hero);
console.log(hero.slice(1, 3)); //returns a sub array and doesn't make change in the original array
console.log(hero.slice(3)) //returns a sub array form the index 3 to the end of an array
let copiedArray = hero.slice() //Returns the whole array and sometimes it's used to make copies of arrays
console.log(copiedArray);
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
arr.splice(2, 2, 100, 102);
arr.splice(2, 0, 101);
arr.splice(0, 1);
console.log(arr);
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);
let deletedSubArray = numbers.splice(3); //starts at index 3 and deletes all the items in the array till the end and returns the deleted sub array
console.log(deletedSubArray);
console.log(numbers)
numbers.splice(); //Does Nothing
console.log(numbers);
//Practice question
let techCompanies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
console.log(techCompanies);
//1st question
techCompanies.shift();
console.log(techCompanies)
//2nd question
techCompanies.splice(2, 1, 'Ola');
console.log(techCompanies);
//3rd question
techCompanies.push('Amazon');
console.log(techCompanies);