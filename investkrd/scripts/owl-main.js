$(document).ready(function () {
    var owl = $('.owl-fs-info');
    owl.owlCarousel({
        margin: 42,
        center: false,
        autoHeight: true,
        loop:true,
        items: 1,
        autoplay:true,
        autoplayTimeout:5000,
        nav: true
    })
});

$(document).ready(function () {
    var owl = $('.owl-fs-footer');
    owl.owlCarousel({
        margin: 32,
        center: false,
        autoHeight: false,
        loop:true,
        items: 5,
        autoplay:false,
        autoplayTimeout:6000,
        nav: true,
        responsive : {

            0 : {
               items:1,
           },

           768 : {
               items: 2,
           },
           1050 : {
               items: 3,
   
           },
           
           1439 : {
               items: 5,
           
           }
       }
    })
});


// ============================================


// ---------------------------------------------------------

$(document).ready(function () {
    var owl = $('.owl-events-slider');
    owl.owlCarousel({
        margin: 32,
        center: false,
        autoHeight: false,
        loop:true,
        items: 1,
        autoplay:true,
        autoplayTimeout:6000,
        nav: true,
    })
});
// =----------------------------------------------------------

$(document).ready(function () {
    var owl = $('.owl-project');
    owl.owlCarousel({
        margin: 32,
        center: false,
        autoHeight: false,
        loop:true,
        items: 2,
        autoplay:false,
        autoplayTimeout:6000,
        nav: true,
        responsive : {

            0 : {
               items:1,
           },

           768 : {
               items: 1,
           },
           1050 : {
               items: 1,
   
           },
           
           1439 : {
               items: 2,
           
           }
       }
    })
});

$(document).ready(function () {
    var owl = $('.owl-footer-slider');
    owl.owlCarousel({
        margin: 32,
        center: false,
        autoHeight: false,
        loop:true,
        items: 5,
        autoplay:false,
        autoplayTimeout:6000,
        nav: true,
        responsive : {

            0 : {
               items:1,
           },

           768 : {
               items: 2,
           },
           1050 : {
               items: 3,
   
           },
           
           1439 : {
               items: 5,
           
           }
       }
    })
});

// ------------------------------
$(document).ready(function () {
    var owl = $('.owl-slider-image');
    owl.owlCarousel({
        margin: 32,
        center: false,
        autoHeight: false,
        loop:true,
        items: 1,
        autoplay:false,
        autoplayTimeout:6000,
        nav: true,
    })
});
// =----------------------------------------------------------

// =----------------------------------------------------------

$(document).ready(function () {
    var owl = $('.owl-story-events');
    owl.owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'fadeIn', // Анимация при исчезновении слайда
        margin: 32,
        center: false,
        autoHeight: false,
        loop:true,
        items: 1,
        autoplay:false,
        autoplayTimeout:6000,
        nav: true,
        dots:true,
    })
});

