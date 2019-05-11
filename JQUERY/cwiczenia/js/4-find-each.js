$('body')
.find('.par2')
.text('Tekst zmieniony w metodzie find')
.css('color', 'red');

let par2 = $('.par2');

// jQuery
par2.each(function(index, biezacyParagraf) {
    // console.log(index, biezacyParagraf);
    if (index === 0) {
        $(biezacyParagraf)
        .css('color', 'green')
        .text('text zmieniony w metodzie each()');
    } else if (index === 1) {
        $(biezacyParagraf)
        .css('color', 'blue')
        .text('text zmieniony w metodzie each()');   
    } else if (index === 2) {
        $(biezacyParagraf)
        .css('color', 'yellow')
        .text('text zmieniony w metodzie each()');}
});

// JS w ES6
// [1, 2, 3].forEach((element, index) => {
