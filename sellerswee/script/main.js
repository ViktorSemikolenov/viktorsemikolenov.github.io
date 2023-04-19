// label form
$('.form input').focusin(function () {
    if ($(this).val().length < 50) {
        $(this).siblings('.label_input').addClass('label_input-top');
    }

});
$('.form input').focusout(function () {
    if ($(this).val().length < 1) {
        $(this).siblings('.label_input').removeClass('label_input-top');
    }
});



$(document).ready(function () {
    var owl = $('.do_you_need-slider');
    owl.owlCarousel({
        nav: true,
        loop: false,
        navText: ['<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.799882 6.76166L18.0799 6.76166C18.2921 6.76166 18.4955 6.84594 18.6456 6.99597C18.7956 7.146 18.8799 7.34948 18.8799 7.56166C18.8799 7.77383 18.7956 7.97731 18.6456 8.12734C18.4955 8.27737 18.2921 8.36166 18.0799 8.36166L0.799882 8.36166C0.587708 8.36166 0.384225 8.27737 0.234196 8.12734C0.0841672 7.97731 -0.000117613 7.77383 -0.000117594 7.56166C-0.000117576 7.34948 0.0841673 7.146 0.234196 6.99597C0.384226 6.84594 0.587709 6.76166 0.799882 6.76166Z" fill="#646464"/> <path d="M7.56148 5.71846e-05C7.66664 -0.000305723 7.77082 0.0201471 7.86803 0.0602398C7.96524 0.100332 8.05356 0.159272 8.12788 0.233657C8.2768 0.384566 8.36029 0.588047 8.36029 0.800056C8.36029 1.01207 8.2768 1.21555 8.12788 1.36646L1.91988 7.56166L8.12788 13.7569C8.2781 13.9071 8.36249 14.1108 8.36249 14.3233C8.36249 14.5357 8.2781 14.7394 8.12788 14.8897C7.97766 15.0399 7.77392 15.1243 7.56148 15.1243C7.34904 15.1243 7.1453 15.0399 6.99508 14.8897L0.233483 8.12806C0.0845713 7.97715 0.0010802 7.77367 0.00108022 7.56166C0.00108024 7.34965 0.0845714 7.14616 0.233483 6.99526L6.99508 0.233657C7.06941 0.159272 7.15772 0.100332 7.25493 0.0602397C7.35214 0.0201471 7.45633 -0.000305741 7.56148 5.71846e-05Z" fill="#646464"/> </svg>', '<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.08 8.36261H0.8C0.587827 8.36261 0.384344 8.27832 0.234315 8.12829C0.0842855 7.97827 0 7.77478 0 7.56261C0 7.35044 0.0842855 7.14695 0.234315 6.99692C0.384344 6.8469 0.587827 6.76261 0.8 6.76261H18.08C18.2922 6.76261 18.4957 6.8469 18.6457 6.99692C18.7957 7.14695 18.88 7.35044 18.88 7.56261C18.88 7.77478 18.7957 7.97827 18.6457 8.12829C18.4957 8.27832 18.2922 8.36261 18.08 8.36261Z" fill="#646464"/> <path d="M11.3184 15.1242C11.2132 15.1246 11.1091 15.1041 11.0119 15.064C10.9146 15.0239 10.8263 14.965 10.752 14.8906C10.6031 14.7397 10.5196 14.5362 10.5196 14.3242C10.5196 14.1122 10.6031 13.9087 10.752 13.7578L16.96 7.56261L10.752 1.36741C10.6018 1.21719 10.5174 1.01345 10.5174 0.80101C10.5174 0.588569 10.6018 0.384829 10.752 0.234611C10.9022 0.084392 11.106 3.16585e-09 11.3184 0C11.5308 -3.16539e-09 11.7346 0.084392 11.8848 0.234611L18.6464 6.99621C18.7953 7.14712 18.8788 7.3506 18.8788 7.56261C18.8788 7.77462 18.7953 7.9781 18.6464 8.12901L11.8848 14.8906C11.8105 14.965 11.7222 15.0239 11.625 15.064C11.5277 15.1041 11.4236 15.1246 11.3184 15.1242Z" fill="#646464"/> </svg>'],
        dots: true,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});


$('.faq_item').click(function () {
    $('.faq_item').removeClass("open");
    $(this).addClass("open");
});

$(function () {
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
});


var postion = $('.scroll_main').offset().top,
    height = $('.scroll_main').height();
$(document).on('scroll', function (){
  var scroll = $(document).scrollTop();
  if(scroll  > postion && scroll < (postion + height) ) {
     $('.join_for_free').addClass('vis')
     }else {
        $('.join_for_free').removeClass('vis')
     }
})

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


