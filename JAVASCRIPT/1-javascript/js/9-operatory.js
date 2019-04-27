'use strict'


let liczba1 = 8, liczba2 = 3;
let wynik;

wynik = liczba1 % liczba2;

console.log(wynik);

// liczba1 = liczba1 + 100; tą samą wartość możemy zapisać tak jak poniżej

liczba1 += 100;

console.log(liczba1);


if ("2" === 2) {
    console.log("prawda");
}   else{
    console.log("Nie Prawda");
}

if ( !(("2" !== 2) && (8<4))) {
    document.write("<br> prawda");
}

let wynikLogiczny = (3>5) ? "prawda" : "fałsz";

console.log(wynikLogiczny);