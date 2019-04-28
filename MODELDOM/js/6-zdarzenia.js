'use strict';


// let parSecond = document.querySelector("#parSecond");
// console.log(parSecond);

// const klikAlert = (e) => {
    // e.preventDefault();
    // e wyłącza działanie linka (e), e.
    // alert("kliknięto DIVa :)");
    // console.log(e.target);


// funkcja zwrotna klikAlert wprowadzamy bez nawiasów. jak będą nawiasy to uruchomi się podczas uruchomienia strony ()
// parSecond.onclick = klikAlert;

// parSecond.addEventListener('dblclick', klikAlert);
// podpinamy się w ten sposób 

// parSecond.removeEventListener('click', klikAlert);
// usuwanie 

// parSecond.addEventListener('dblclick', () => {
    // alert('funkcja anonimowa CLICK')});

    // let link = document.querySelector('.link');
    // link.addEventListener('click', klikAlert)

    let parSecond = document.querySelector("#parSecond");
    console.log(parSecond);

    let ParWParSecond = document.getElementById("parWParSecond");

    const klikDiv = (e) => {
        console.log("kliknięto DIV")};

        const klikParagraf = (e) => {
            console.log("Kliknięto PARAGRAF");

        }
    
    parSecond.addEventListener('click', klikDiv);
    ParWParSecond.addEventListener('click', klikParagraf);