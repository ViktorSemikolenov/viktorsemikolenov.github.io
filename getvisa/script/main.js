$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".navigation").addClass("navigation_fixed");
    } else {
        $(".navigation").removeClass("navigation_fixed");
    }
});






$(document).ready(function () {
    var owl = $('.documents-visa__slider');
    owl.owlCarousel({
        nav: true,
        margin: 33,
        center: false,
        mouseDrag: false,
        autoHeight: false,
        navText: ['<svg width="8" height="14" viewBox="0 0 8 14" fill="none"> <path d="M7 1L1 7L7 13" stroke="#2972FF" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/> </svg>','<svg width="8" height="14" viewBox="0 0 8 14" fill="none"> <path d="M1 1L7 7L1 13" stroke="#2972FF" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/> </svg>'],
        autoWidth: true,
        loop: false,
        items: 4,
        responsive: {
            0: {
                items: 1,
                autoWidth: false,
                slideBy: 1,
                margin: 20,
            },
            767: {
                items: 2,
                autoWidth: false,
                slideBy: 2,
                margin: 320,
            },
            1023: {
                items: 4
            }
        }
    })
});


$(document).ready(function () {
    var owl = $('.reviews__slider ');
    owl.owlCarousel({
        nav: true,
        margin: 40,
        center: false,
        mouseDrag: false,
        autoHeight: false,
        autoWidth: true,
        loop: true,
        navText: ['<svg width="8" height="14" viewBox="0 0 8 14" fill="none"> <path d="M7 1L1 7L7 13" stroke="#2972FF" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/> </svg>','<svg width="8" height="14" viewBox="0 0 8 14" fill="none"> <path d="M1 1L7 7L1 13" stroke="#2972FF" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/> </svg>'],
        items: 2
    })
});


$(document).ready(function() {
	$('.accordion-panel').on('click', '.accordion__header', function() {
		$('.accordion__body').slideUp().removeClass('flipInX');
		$('.accordion__button').removeClass('fa-minus');
		if($(this).next().is(':hidden')) {
			$(this).next().slideDown().addClass('flipInX');
			$(this).find('.accordion__button').addClass('fa-minus');
		} else {
			$(this).next().slideUp();
			$(this).find('.accordion__button').addClass('fa-plus');
		}
	});
});



// 
$(document).ready(function () {
    var owl = $('.quiz');
    owl.owlCarousel({
        nav: false,
        loop: false,
        dots: true,
        mouseDrag: false,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        items: 1,
        autoHeight: true,
        animateOut: 'fadeOut',
        smartSpeed:0,
        margin:10
        
    })
});


$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});


history.pushState('', document.title, window.location.pathname);



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

// 
if(window.innerWidth<1024){
    $(".documents-visa__item-show-mob").addClass("documents-visa__item-show");
    $(".mob-click-one").click(function () {
        $(".mob-click-one").removeClass("documents-visa__item-show");
        $(this).toggleClass("documents-visa__item-show");
    });
    $(".mob-click-two").click(function () {
        $(".mob-click-two").removeClass("documents-visa__item-show");
        $(this).toggleClass("documents-visa__item-show");
    });
}

if(window.innerWidth>1024){
$(".documents-visa__item").click(function () {
    $(".documents-visa__item").removeClass("documents-visa__item-show");
    $(this).toggleClass("documents-visa__item-show");
});
}