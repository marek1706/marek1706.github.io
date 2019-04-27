'use strict'

let imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';

console.log(imiona)
imiona.push('Geralt');

// usuwnie ostatniego wpisu
imiona.pop()


console.log(imiona);
// unshift dodaje pierwszy element tablicy
console.log(imiona.unshift('Robert'));

console.log(imiona);

// usuwanie pierwszego elem. 
console.log(imiona.shift());

console.log(imiona);

console.log(imiona.length);

// join separator ""
let imionaStr = imiona.join(":");

console.log(imionaStr);

imiona.reverse();
console.log(imiona);

imiona.unshift('Zenek');
console.log(imiona);

imiona.sort();
console.log(imiona);


