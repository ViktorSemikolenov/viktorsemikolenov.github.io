
$(document).ready(function () {
    var owl = $('.baner-slider');
    owl.owlCarousel({
        nav: true,
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});

// label form
$('.form-row input').focusin(function () {
    if ($(this).val().length < 50) {
        $(this).siblings('.placeholder').addClass('placeholder-top');
    }

});
$('.form-row input').focusout(function () {
    if ($(this).val().length < 1) {
        $(this).siblings('.placeholder').removeClass('placeholder-top');
    }
});


// якари
$(function () {
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });
});

$(".btn-menu").click(function () {
    $(".nav-top").toggleClass("nav-top-open");
}); 
$(".close-menu").click(function () {
    $(".nav-top").toggleClass("nav-top-open");
}); 

