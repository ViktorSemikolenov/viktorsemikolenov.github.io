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
        responsive : {
         // breakpoint from 0 up
         0 : {
            items:1,
        },
        // breakpoint from 480 up
        768 : {
            items: 2,
        },
        1050 : {
            items: 2,

        },
        // breakpoint from 768 up
        1439 : {
            items: 2,
        
        }
    }
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
        autoHeight:true,
        navText: ["<img src='../image/icons/arrow-left.svg'>","<img src='../image/icons/arrow-right.svg'>"],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1,

            },
            // breakpoint from 480 up
            768 : {
                items: 2,
                margin: 24,

            },
            1050 : {
                items: 2,

            },
            // breakpoint from 768 up
            1439 : {
                items: 2,
            
            }
        }
    })
});

// --------------------------------------------------

$(document).ready(function () {
    var owl = $('.owl-for-people');
    owl.owlCarousel({
        margin: 32,
        center: false,
        autoHeight: false,
        loop:true,
        items: 2,
        autoplay:false,
        autoplayTimeout:5000,
        nav: true,
        autoHeight:true,
        navText: ["<img src='../image/icons/arrow-left.svg'>","<img src='../image/icons/arrow-right.svg'>"],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1,

            },
            // breakpoint from 480 up
            768 : {
                items: 2,
                margin: 24,

            },
            1050 : {
                items: 2,

            },
            // breakpoint from 768 up
            1439 : {
                items: 2,
            
            }
        }
    })
});

// --------------------------------------------------

$(document).ready(function () {
    var owl = $('.owl-four-slider');
    owl.owlCarousel({
        margin: 32,
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
                items:1,
                margin:18

            },
            // breakpoint from 480 up
            768 : {
                items: 2,
                margin:24
            },
            1050 : {
                items: 3,

            },
            // breakpoint from 768 up
            1439 : {
                items: 4,
            
            }
        }
    })
});
