$(() => {
// zmienne
    const slideShow = $('.slide-show');
    const singleSlide = $('.single-slide');
    const slideCount = singleSlide.length;
    const slideWidth = 100 / slideCount;
    let indexCounter = 0;
    // const buttonLeft = $('.prev-slide');
    // const buttonRight = $('.next-slide');

    console.log(slideShow)
    console.log(singleSlide)
    // console.log(buttonLeft)
    // console.log(buttonRight)

    // ustawiamy dynamicznie szerokość kontenera

    slideShow.css('width', slideCount * 100 + '%');
    

    // ustawiamy dynamicznie szerokość obrazków
    singleSlide.each(function(index) {
        $(this).css({
            'widht': slideWidth + '%',
            'margin-left': index * slideWidth + '%'
        });
        
    });

    // PODPINAMY EVENTY CLICK NA PRZYCISKI

    $('.prev-slide').click(function() {
        slide(indexCounter - 1);

        // console.log(lewy przycisk)
    })

    $('.next-slide').click(function() {
        slide(indexCounter + 1);

        // console.log(prawy przycisk)
    });
    function slide(newIndex) {

        console.log(newIndex)
        if (newIndex < 0 || newIndex >= slideCount) {
            return;
        }

        // UKRYWAMY NAPIS

        const currentTitle = $('.slide-caption').eq(newIndex);
        currentTitle.fadeOut();

        const marginLeft = newIndex * (-100) + '%';

        // WYWOŁANIE ANIMACJI
        slideShow.animate({
            'margin-left': marginLeft
        }, 1000, function() {
            currentTitle.fadeIn();
            indexCounter = newIndex;
        });


         
    }
});
