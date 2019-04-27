'use strict'

console.log('działa');

const PI = 3.14;
// wersja ES5

// function poleKola(r){
    // let poleKola = PI * r * r;

    // console.log(poleKola);




// zapisy w wersji ES6 

const poleKola =(r, x) => {
    let poleKola = x * PI * r * r;

    // console.log(poleKola);
    return poleKola;
// x ilość kół o takiej samej wartości
}

poleKola(25);

poleKola(50);

let rDuzego = 108;

poleKola(rDuzego);
// poleKola(25, 3);

// poleKola(50, 5);

rDuzego = 108;

poleKola(rDuzego);

let wynikDzialaniaFunkcji = poleKola(rDuzego, 10);

alert(wynikDzialaniaFunkcji);