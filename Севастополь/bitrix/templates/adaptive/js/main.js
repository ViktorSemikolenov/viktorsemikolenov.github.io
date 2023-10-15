$(document).ready(function(){

	/*$("a[href^=#]").click(function(e) {
		e.preventDefault();
		alert(a.attr('href'));
	});*/

	$(".fb-link").fancybox();
    
    // Main
    $('.top-line__search-btn').click(function(e){
        if($(this).hasClass('show')){
                        if (!$('.top-line__search-input').val()) {
                                e.preventDefault();
                        }
                }else{
                        e.preventDefault();
            $('.top-line__search-input').fadeIn().focus();
            $(this).addClass('show');
        }
    });
    $(document).mouseup(function(e){
        var div = $(".top-line__search");
        if (!div.is(e.target)&& div.has(e.target).length === 0){
            $('.top-line__search-input').fadeOut();
            $('.top-line__search-btn').removeClass('show');
        }
    });
    
    $('.left-side__search-btn').click(function(e){
        if($(this).hasClass('show')){
                        if (!$('.left-side__search-input').val()) {
                                e.preventDefault();
                        }
                }else{
                        e.preventDefault();
            $('.left-side__search-input').fadeIn().focus();
            $(this).addClass('show');
        }
    });
    $(document).mouseup(function(e){
        var div = $(".left-side__search");
        if (!div.is(e.target)&& div.has(e.target).length === 0){
            $('.left-side__search-input').fadeOut();
            $('.left-side__search-btn').removeClass('show');
        }
    });
    
    $('.top-line__language').on('click',function(){
        $(this).addClass('show');
        $(this).find('.hide').slideDown();
    });
    $(document).mouseup(function(e){
        var div = $(".top-line__language");
        if (!div.is(e.target)&& div.has(e.target).length === 0){
            $('.top-line__language .hide').slideUp(function(){
                $('.top-line__language').removeClass('show'); 
            });
        }
    });
    
    // Mob Menu Script
    $('.top-line__menu-btn').on('click',function(){
        $('.top-line__menu-btn').toggleClass('active');
        $('.left-side__nav').slideToggle();
        $('body').toggleClass('no-scroll');
    });
    function menuSecond(){
        if($(window).width()<921){
            $('nav a.second-tab').on('click',function(e){
                if($(this).hasClass('show') == false){
                    e.preventDefault();
                    $('.second-lvl').slideDown();
                    $('nav a.second-tab').removeClass('active');
                    $(this).addClass('show');
                    $(this).parent().find('.second-lvl').slideDown();    
                }
            });
        }    
    }
    menuSecond();
    $(window).resize(function(){
        if($(window).width()<921){
            menuSecond();
        }
        if($(window).width() > 920){
            $('.left-side__nav').show();
            $('body').removeClass('no-scroll');
            $('.top-line__menu-btn').removeClass('active');
            $('.second-lvl').hide();
            $('nav a.second-tab').removeClass('show');
            $('.top-line__search-btn').removeClass('show');
            $('.top-line__search-input').hide();
        }
    }); 
    // Mob Menu Script
    //Main
    
    // Index
    $('.index-slider__js').slick({
        fade: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 760,
                settings: {
                    arrows: false,
                    dots: true,
                    adaptiveHeight: true
                }
            }
        ]
    });
    
    $('.important-topics__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.index-history__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.usefull-link__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    $('a[href^="#"]').click(function() {
        $('html, body').animate({
            scrollTop: $("a[name='"+$.attr(this, 'href').substr(1)+"']").offset().top-$('.top-line').height()
        }, 800);
        return false;
    });
    // Index
    
    
    // News
    //$( ".news__filter-calendar-input" ).datepicker();
    // News
    
    // Form Page Script
    $(".phone-mask").mask("+7 (999) 999-99-99");
    $('.form-wrap .input-wrap input').on('click',function(){
        $(this).parent().find('.clean-input').show();
    });
    $('.form-wrap .input-wrap input').focusout(function(){
        var inpVal = $(this).val();
        if(inpVal.length == 0 || inpVal == '+7 (___) ___-__-__'){
            $(this).parent().find('.clean-input').hide();
        }
    });
    $('.clean-input').on('click',function(){
        $(this).parent().find('input').val('');
        $(this).hide();
    });
    $('.input').on('click',function(){
        $(this).removeClass('error');
    });
    $('.submit-form').on('click',function(e){
        e.preventDefault();
        var error = false;
        var nameVal = $('.name-valid').val();
        var phoneVal = $('.phone-valid').val();
        var emailVal = $('.email-valid').val();
        var themeVal = $('.theme-valid').val();
        var messageVal = $('.message-valid').val();
        var patternEmail = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

        if(nameVal.length == 0){
            $('.name-valid').addClass('error');
            error = true;
        }
        if((phoneVal.length == 0) || (phoneVal == '+7 (___) ___-__-__')){
            $('.phone-valid').addClass('error');
            error = true;
        }
        if(patternEmail.test(emailVal) == false) {
            $('.email-valid').addClass('error');
            error = true;
        }
        if(themeVal.length == 0){
            $('.theme-valid').addClass('error');
            error = true;
        }
        if(messageVal.length == 0){
            $('.message-valid').addClass('error');
            error = true;
        }
    });
    // Form Page Script
    
    // Document
    //$( ".document-filter__data-input" ).datepicker();
    // Document
    
    // Support
    $('.support-accordeon__btn, .support-section h2, .support-item__desc').on('click',function(){
        $(this).parent().parent().toggleClass('show');
        $(this).parent().parent().children('.support-item__hide').slideToggle();
        $(this).parent().children('.support-item__more').fadeToggle();
    });
    // Support
    
    // Form 2 Page Script
    $('.involvement__file-upload').change(function(){
        var file = $(this).val().replace(/.*\\/, "");
        $(this).parent().find('.form__file-upload_text').html(file);
    });
    // Form 2 Page Script



    // slider
    $('.preim__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1
    });


});