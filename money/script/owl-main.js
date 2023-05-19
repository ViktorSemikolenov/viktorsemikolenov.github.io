$(document).ready(function () {
    var owl = $('.our-collectors__owl');
    owl.owlCarousel({
        nav: true,
        margin: 0,
        center: false,
        autoHeight: true,
        loop: true,
        items: 1,
        autoplay:true,
        autoplayTimeout:5000
    })
});



$(document).ready(function () {
    var owl = $('.header-tab');
    owl.owlCarousel({
        nav: true,
        margin: 40,
        center: false,
        autoHeight: true,
        loop: true,
        items: 7,
        mouseDrag: false,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 4
            },
            780: {
                items: 5
            },
            1000: {
                items: 7
            }
        }
    })
});


$(document).ready(function () {
    var owl = $('.form-quez__slider');
    owl.owlCarousel({
        nav: false,
        loop: false,
        dots: true,
        mouseDrag: false,
        touchDrag:false,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        items: 1,
        autoHeight: true,
        animateOut: 'fadeOut',
        smartSpeed:0,
        
    })
});