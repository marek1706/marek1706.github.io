'use strict';


// pętla for 

for ( let i=10 ; i>0 ; i--) {
    console.log(i);
}

// pętla forEach

let tablica = ['Krystian', "Monika", "Danuta"];

for (let i=0; i < tablica.length; ++i) {
    console.log(tablica[i]);
}

// const interuj = (element, index) => {
    // console.log("Element z Indexem: " + index + " ma wartość " + element);}


// tablica.forEach(interuj);

tablica.forEach((element, index) => {
    console.log("Element z Indexem: " + index + " ma wartość " + element);})

    // pętla for in

    let person = {
        name: 'Krystian',
        age: 35
    }

    for(let key in person) {
        console.log(person[key]);

    }


    // petla for off

    let interable = [10, 20, 30];

    for (let value of interable) {
        value += 1;
        console.log(value);
    }


    // petla while


    let it = 0;
    while (it <10) {
        console.log(it)
        it++;
    }
// petla do while

    let iter =20;
    do {
        // console.log(iter);
        // wykona dwa razy (powyżej)
        iter++;
        console.log(iter);
    } while (iter <10)


    // przerywanie pętli


    let a = 0;
    while (a <10) {
        console.log(++a);

        if ( a == 5 ) {
            break;
        }
    }

    // przeskakiwanie do kolejnej interakcji


    for (let b =0; b<10 ; ++b) {
       if ( b == 5) {
        continue;
    } else {
        console.log(b);
    }
    console.log("--")}