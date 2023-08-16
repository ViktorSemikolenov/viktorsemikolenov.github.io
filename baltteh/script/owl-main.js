$(document).ready(function () {
    var owl = $('.owl-banner');
    owl.owlCarousel({
        margin: 24,
        center: false,
        autoHeight: false,
        loop:true,
        items: 1,
        autoplay:true,
        autoplayTimeout:5000,
        nav: true,
        navContainer: '.navigation-banner',
        dotsContainer: '.pagination-banner'
    })
});

// табы слайдера
$(document).ready(function () {
    var owl = $('.owl-product-one');
    owl.owlCarousel({
        margin: 20,
        center: false,
        autoHeight:false,
        loop: false,
        items: 5,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        mouseDrag: false,
        touchDrag: true,
        navContainer: '.navigation-product-one',
        dotsContainer: '.pagination-product-one',
        responsive:{
            0 : {
                items: 2,
                margin: 6,
            },
            700 : {
                items: 3,
            },
            939 : {
                items: 4,
            },
            1179 : {
                items: 5,
            }
        }
    })
});


$(document).ready(function () {
    var owl = $('.owl-product-two');
    owl.owlCarousel({
        margin: 20,
        center: false,
        autoHeight:false,
        loop: false,
        items: 5,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        mouseDrag: false,
        touchDrag: true,
        navContainer: '.navigation-product-two',
        dotsContainer: '.pagination-product-two',
        responsive:{
            0 : {
                items: 2,
                margin: 6,
            },
            700 : {
                items: 3,
            },
            939 : {
                items: 4,
            },
            1179 : {
                items: 5,
            }
        }
    })
});


$(document).ready(function () {
    var owl = $('.owl-product-three');
    owl.owlCarousel({
        margin: 20,
        center: false,
        autoHeight:false,
        loop: false,
        items: 5,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        mouseDrag: false,
        touchDrag: true,
        navContainer: '.navigation-product-three',
        dotsContainer: '.pagination-product-three',
        responsive:{
            0 : {
                items: 2,
                margin: 6,
            },
            700 : {
                items: 3,
            },
            939 : {
                items: 4,
            },
            1179 : {
                items: 5,
            }
        }
    })
});


$(document).ready(function () {
    var owl = $('.owl-product-foure');
    owl.owlCarousel({
        margin: 20,
        center: false,
        autoHeight:false,
        loop: false,
        items: 5,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        mouseDrag: false,
        touchDrag: true,
        navContainer: '.navigation-product-foure',
        dotsContainer: '.pagination-product-foure',
        responsive:{
            0 : {
                items: 2,
                margin: 6,
            },
            700 : {
                items: 3,
            },
            939 : {
                items: 4,
            },
            1179 : {
                items: 5,
            }
        }
    })
});



$(document).ready(function () {
    var owl = $('.owl-product-slider');
    owl.owlCarousel({
        margin: 0,
        center: false,
        autoHeight: false,
        loop:false,
        items: 1,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        dots: true,
        mouseDrag: true,
        responsive:{
            0 : {
                items: 1,
            },
            2560 : {
                items: 1,
            }
        }
    })
});



$(document).ready(function () {
    var owl = $('.owl-news');
    owl.owlCarousel({
        margin: 20,
        center: false,
        autoHeight:true,
        loop:false,
        items: 5,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        mouseDrag: true,
        dots: true,
        navContainer: '.navigation-news',
        dotsContainer: '.pagination-news',
        responsive:{
            0 : {
                items: 2,
                margin: 6,
            },
            700 : {
                items: 3,
            },
            939 : {
                items: 4,
            },
            1179 : {
                items: 5,
            }
        }
    })
});


