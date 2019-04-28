'use strict';

var mainHeader = document.getElementById('main-header');

console.log(mainHeader);
console.log(mainHeader.innerHTML);
console.log(mainHeader.innerText);
console.log(mainHeader.outerHTML);

mainHeader.id = "nowe-id";


mainHeader.setAttribute("class", "header");

mainHeader.className = "nowa-klasa";

console.log(mainHeader.outerHTML);

let klasy = mainHeader.className;


// mainHeader.classList.add("active");
// mainHeader.classList.remove("active");
// mainHeader.classList.toggle("active");
// mainHeader.classList.toggle("active");
// podwojny wyłącza 
console.log(klasy);


let zmienKolor = document.getElementById("toggle");

zmienKolor.addEventListener("click", () => {
    zmienKolor.classList.toggle("active");
});

zmienKolor.style.color = "red";
zmienKolor.style.backgroundColor = "lime";