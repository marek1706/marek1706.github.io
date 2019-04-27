"use strict";

let kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe() {
        console.log(this.imie);
    }
}

// let krystian = {
    // imie: "Krystian",
    // wzrost: 180,
    // przedstawOsobe() {
        // console.log(this.imie);}}
    

kaja.przedstawOsobe();
// krystian.przedstawOsobe();

console.log(kaja.wzrost);

kaja.wzrost = 200;

console.log(kaja);

let monetaZl = {
    promien: 20,
    nominal: 100,
    waga: 50,
    material: "złoto"
}

console.log(monetaZl.material);

// nazwy klas z dużej litery

class Osoba {
    constructor(imie, nazwisko, wzrost, oczy) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost = wzrost;
        this.oczy = oczy;
    }


    wyswietlnfo() {
        console.log("Imię" + this.imie +"\n" + "Nazwisko: " + this.nazwisko + "\n" + "Wzrost: "+ this.wzrost + "\n" + "Oczy: " + this.oczy);
    }
}

let krystian = new Osoba('Krystian', 'Dziopa', 180, 'niebieskie');
let andrzej = new Osoba('Andrzej', 'Szymański', 186, 'zielone');

console.log(krystian,andrzej);