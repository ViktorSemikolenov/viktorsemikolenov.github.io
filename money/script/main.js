// window.onload = function () {
//     document.body.classList.add('loaded_hiding');
//     window.setTimeout(function () {
//       document.body.classList.add('loaded');
//       document.body.classList.remove('loaded_hiding');
//     }, 500);
//   }


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

// Modal
$(".modal").each(function () {
    $(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
        modal = $($this).data("modal");

    $(modal).parents(".overlay").addClass("open");
    setTimeout(function () {
        $(modal).addClass("open");
    }, 350);

    $(document).on('click', function (e) {
        var target = $(e.target);

        if ($(target).hasClass("overlay")) {
            $(target).find(".modal").each(function () {
                $(this).removeClass("open");
            });
            setTimeout(function () {
                $(target).removeClass("open");
            }, 350);
        }

    });

});


$(".close-modal").on('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
        modal = $($this).data("modal");

    $(modal).removeClass("open");
    setTimeout(function () {
        $(modal).parents(".overlay").removeClass("open");
    }, 350);

});

