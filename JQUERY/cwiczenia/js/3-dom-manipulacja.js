let paragrafy = $('p');
// console.log(paragrafy.text());

// paragrafy.text('Nowy tekst paragrafu');

// let paragrafyByHtml = $('p');
// console.log(paragrafyByHtml.html());

// paragrafyByHtml.html('<span>Treść z znacznika span</span>');

let naglowek2 = $('#naglowek-2');
// naglowek2.prepend('Prependujemy treść | ');
// naglowek2.append(' | Apendujemy treść');

// naglowek2.before('Beforujemy treść | ');
// naglowek2.after(' | Afterujemy treść');

// naglowek2.empty();
// empty usuwa wszystko z wnętrza paragrafu
// naglowek2.remove();
// remove usuwa wszystko łącznie z paragrafem

naglowek2.replaceWith("<span> Span </span>");
// zmiana h2 na span, alternantywa na outerhtml in pure JS


// let paragrafy = $('p');
// paragrafy.css('background-color', 'green'); 
// dla jednej wartości do zmoiany

// paragrafy.css( {
//     'background-color': 'green',
//     'font-size': '2em',
//     'color': 'yellow'
// });

// let pierwszyParagraf = $('.par').eq(0);
// console.log(pierwszyParagraf)

// pierwszyParagraf.addClass('red');
// pierwszyParagraf.removeClass('red');

// $('input#input-1').val('Jan Kowalski');
// jest pole wypełnione
$('input#input-1').change(function() {
    console.log($(this).val())
});