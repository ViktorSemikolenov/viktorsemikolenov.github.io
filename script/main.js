$('.banner__slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoHeight:true,
    responsive:{
        0:{
            items:1
        }
    }
})

$('.comparison-competitors__slider').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    autoHeight:true,
    responsive:{
        0:{
            items:1
        },
        1023:{
            items:3
            
        }
    }
})

$('.reviews-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoHeight:true,
    responsive:{
        0:{
            items:1
        },
        1023:{
            items:2
        }
    }
})

$(document).ready(function () {
    var owl = $('.slider-three');
    owl.owlCarousel({
        nav: true,
        margin: 20,
        dots:true,
        center: false,
        autoHeight: true,
        loop: true,
        items: 3,
        // autoplay: true,
        // autoplayTimeout:3000,
        responsive:{
            0:{
                items:2,
                margin: 5
            },
            600:{
                items:2,
                margin: 5
            },
            768:{
                items:3,
                margin: 10,
            },

        }
    })

});





$(function() {
	var tab = $('.tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('.tabs .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('.tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('.tabs .tabs-nav a[href=' + $(this).attr('href')+ ']').click();
	});
	
	// Отрытие вкладки из хеша URL
	if(window.location.hash){
		$('.tabs-nav a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#" . window.location.hash).offset().top);
	}
});

$(function() {
	var tab = $('.tabs2 .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('.tabs2 .tabs-nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('.tabs2 .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('.tabs2 .tabs-nav a[href=' + $(this).attr('href')+ ']').click();
	});
	
	// Отрытие вкладки из хеша URL
	if(window.location.hash){
		$('.tabs-nav a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#" . window.location.hash).offset().top);
	}
});




$(document).ready(function() {
	$('.accordion-panel').on('click', '.accordion__header', function() {
		$('.accordion__body').slideUp().removeClass('flipInX');
		$('.accordion__button').removeClass('fa-minus');
        $('.accordion__header').removeClass('show');
		if($(this).next().is(':hidden')) {
			$(this).next().slideDown().addClass('flipInX');
			$(this).find('.accordion__button').addClass('fa-minus');
            $(this).addClass('show');
		} else {
			$(this).next().slideUp();
			$(this).find('.accordion__button').addClass('fa-plus');
            $(this).removeClass('show');
		}
	});
});




$(".humburger").click(function () {
    $(this).toggleClass("active");
    $(".navigation-top__row").toggleClass("active");
    $(".navigation-top").toggleClass("active");
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
