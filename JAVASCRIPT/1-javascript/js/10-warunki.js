'use strict'

let wzrostMateusza = 190;
let wzrostOlgi = 190;

if (wzrostOlgi<wzrostMateusza) {
    console.log("Olga jest niższa")
} 

if (wzrostOlgi >wzrostMateusza){
    console.log("Olga jest wyższa :)");
}  else if (wzrostOlgi == wzrostMateusza) {
    console.log("Olga tak wysoka jak Mateusz");
}  else {
    console.log ("Olga jest niższa");
}

// warunek switch

let kolor = 'zielony';

switch (kolor) {
    case 'czerwony': 
        console.log ('Kolor czerwony') 
        break;
    case 'zielony':
        console.log('Kolor zielony')
        break;    
    case 'niebieski':
        console.log('Kolor niebieski')
        break;
    default:
        console.log('Inny kolor');



}