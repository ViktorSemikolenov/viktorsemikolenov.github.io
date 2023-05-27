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
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        items: 1,
        autoHeight: true,
        animateOut: 'fadeOut',
        smartSpeed:0,
        
    })
});