
// label form
$('.input-line input').focusin(function () {
    if ($(this).val().length < 50) {
        $(this).siblings('.placeholder').addClass('placeholder-top');
    }

});
$('.input-line input').focusout(function () {
    if ($(this).val().length < 1) {
        $(this).siblings('.placeholder').removeClass('placeholder-top');
    }
});


// -----------------------------
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".navigation-page").addClass("fix-navigation");
    } else {
        $(".navigation-page").removeClass("fix-navigation");
    }
});



$(".humburger").click(function () {
    $(this).toggleClass("active");
    $(".header-nav").toggleClass("header-nav__open");
});