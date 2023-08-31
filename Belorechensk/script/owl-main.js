$(document).ready(function () {
    var owl = $('.owl-slider');
    owl.owlCarousel({
        margin: 2,
        center: false,
        autoHeight: false,
        loop:true,
        items: 2,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        navText: ["<img src='../image/icons/arrow-left.svg'>","<img src='../image/icons/arrow-right.svg'>"],
    })
});

// --------------------------------------------------

$(document).ready(function () {
    var owl = $('.owl-slider-two');
    owl.owlCarousel({
        margin: 40,
        center: false,
        autoHeight: false,
        loop:true,
        items: 2,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        navText: ["<img src='../image/icons/arrow-left.svg'>","<img src='../image/icons/arrow-right.svg'>"]
    })
});

