'use strict';

// typ liczbowy

let wyplata = 5000;
let premia = 2500;
let calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);
console.log(typeof calkowitawyplata);

// typ łańcuchowy - string

let wyplataStr = "5000";
let premiaStr = "2500";
let calkowitaWyplataStr;


// typ boolean logiczny
let czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
    console.log("Jest  smog");

}
else {
    console.log("Nie ma smogu");
}


// typ specjalny niezdefiniowany

let niezdefiniowanaZmienna;
let nullowaZmienna = null;

console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);

// let imieStudenta = "Michał \"Kroszka\"";
let nazwisko = "Kroszka";
let imieStudenta = `Michał ${nazwisko}`;
console.log(imieStudenta);