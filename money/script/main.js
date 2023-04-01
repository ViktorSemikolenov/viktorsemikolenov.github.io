
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
        $(".navigation-page").addClass("no-icon");
    } else {
        $(".navigation-page").removeClass("no-icon");
    }
});


var header = $('.navigation-page'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('fix-navigation');
	} else {
		header.removeClass('fix-navigation');
	}
	scrollPrev = scrolled;
});



$(".humburger").click(function () {
    $(this).toggleClass("active");
    $(".header-nav").toggleClass("header-nav__open");
});