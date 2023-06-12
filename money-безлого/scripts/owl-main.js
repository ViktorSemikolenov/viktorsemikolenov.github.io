$(document).ready(function () {
    var owl = $('.form-quez__slider');
    owl.owlCarousel({
        nav: false,
        loop: false,
        dots: true,
        margin:30,
        mouseDrag: false,
        touchDrag:false,
        URLhashListener: true,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        startPosition: 'URLHash',
        items: 1,
        autoHeight: false,
        animateOut: 'fadeOut',
        smartSpeed:0,
        
    })
});


