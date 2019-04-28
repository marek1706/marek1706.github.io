'use strict'


var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);

// childNodes zlicza wszystkie elementy łącznie ze spacjami

console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.childNodes[1]);
console.log(pierwszyDiv.children);
// console.log(pierwszyDiv.children[1]odniesie się do pierwszego elementu);

console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);


var pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.nextElementSibling.nextElementSibling);

var pierwszyChild = pierwszyDiv.childNodes[6];
console.log(pierwszyChild);
console.log(pierwszyChild.nextElementSibling);

console.log(pierwszyChild.previousElementSibling);
// previous - poprzedni element