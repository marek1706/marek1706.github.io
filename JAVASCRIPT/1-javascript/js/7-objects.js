"use strict";

let kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe() {
        console.log(this.imie);
    }
}

let krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe() {
        console.log(this.imie);
    }
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();

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