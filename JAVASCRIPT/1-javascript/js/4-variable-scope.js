'use strict';

let kontoLukasza = 1000000;

const zrobZakupy = (zaIle) => {

    let kontoNatalii = 2000000;

    let ileZostaloNaKoncie = kontoNatalii - zaIle;
    // let ileZostaloNaKoncie = kontoLukasza - zaIle;
    return ileZostaloNaKoncie; 
}

const zaplacPodatek = (kwota) => {
    console.log(kontoNatalii);
}

console.log(zrobZakupy(500000));
// używamy zmiennych lokalnych nie globalnych !!!