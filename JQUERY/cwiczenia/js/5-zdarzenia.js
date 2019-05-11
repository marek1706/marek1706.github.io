let naglowek1 = $('#naglowek-1');
let naglowek2 = $('#naglowek-2');
naglowek1.click(function() {
    $(this).css({
        'background-color': 'yellow',
        'text-decoration': 'underline'
    });
});
// bracket  -ustawianie kolorów nawiasów

naglowek2.on({
    'dblclick': function() {
        $(this).css('background-color', 'green');
    },
    'mouseenter' : function() {
        $(this).css('font-size', '3em');
    },
    'mouseleave' : function() {
        $(this).css('font-size', 'inherit');
    },
});