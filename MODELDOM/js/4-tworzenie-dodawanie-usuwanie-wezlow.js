'use strict';


let btn = document. createElement("button");
console.log(btn);
let txtBtn = document.createTextNode("Kliknij mnie!");
console.log(txtBtn);
let classBtn = document.createAttribute("class");
console.log(classBtn);

classBtn.value = "btn";
console.log(classBtn);
btn.appendChild(txtBtn);
btn.setAttributeNode(classBtn);
btn.setAttribute("onclick", "btnClick();");

console.log(classBtn);


document.body.appendChild(btn);


// usuwanie

btn.removeAttribute("onclick");
btn.removeAttribute("class");

btn.parentElement.removeChild(btn);
// dokument.body.removeChild(btn);jesli przypiete do body
