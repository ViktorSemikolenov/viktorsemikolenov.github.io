$(document).ready(function () {
    var owl = $('.owl-banner');
    owl.owlCarousel({
        margin: 24,
        center: false,
        autoHeight: false,
        loop:false,
        items: 1,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        navText: ["<img src='../image/icons/arrow-left.svg'>","<img src='../image/icons/arrow-right.svg'>"],
    })
});

// --------------------------------------------------

$(document).ready(function () {
    var owl = $('.owl-shops');
    owl.owlCarousel({
        margin: 24,
        center: false,
        autoHeight: false,
        loop:false,
        items: 4,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        autoHeight:true,
        navText: ["<img src='../image/icons/arrow-left.svg'>","<img src='../image/icons/arrow-right.svg'>"],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:2,

            },
            // breakpoint from 480 up
            768 : {
                items: 2,
                margin: 24,

            },
            1260 : {
                items: 4,

            },
            // breakpoint from 768 up
            1439 : {
                items: 4,
            
            }
        }
    })
});

