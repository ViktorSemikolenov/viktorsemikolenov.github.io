$(document).ready(function () {
    var owl = $('.owl-service');
    owl.owlCarousel({
        nav: true,
        margin: 24,
        center: false,
        loop: true,
        items: 3,
        autoplay:false,
        autoplayTimeout:500,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 480 up
            768 : {
                items: 2,
            },
            // breakpoint from 768 up
            1200 : {
                items: 3,
            }
        }
    })
});


$(document).ready(function () {
    var owl = $('.owl-project');
    owl.owlCarousel({
        nav: true,
        margin: 24,
        center: false,
        autoHeight: false,
        loop: true,
        items: 1,
        autoplay:false,
        autoplayTimeout:5000,
        responsive : {
            // breakpoint from 0 up
            0 : {
                
            },
            // breakpoint from 480 up
            480 : {

            },
            // breakpoint from 768 up
            768 : {

            }
        }
    })
});

