




$(".hamburder-btn").click(function () {
    $(".logo").toggleClass("open");
    $(this).toggleClass("open");
    $(".menu").toggleClass("open");
});





// таймер для Skeleton Loading начало
setTimeout (function(){
    $('.skeleton-box').removeClass('skeleton-box');
 }.bind(this), 600);

// таймер для Skeleton Loading Конец


// label form
$('.input-row input').focusin(function () {
    if ($(this).val().length < 50) {
        $(this).siblings('.placeholder').addClass('placeholder-top');
    }

});
$('.input-row input').focusout(function () {
    if ($(this).val().length < 1) {
        $(this).siblings('.placeholder').removeClass('placeholder-top');
    }
});





$(':input[required=""],:input[required]').bind('focusout', function(){
    if ($(this).val() == ""){
        $(".message-error").addClass("show");
        $('.form-page').addClass('input-error')
   }else if ($(this).val().length > 1){
        $('.form-page').removeClass('input-error');
        $(".message-error").removeClass("show");   }
})

$('.send-form').click(function(){
    if ($(this).val() == ""){
        $(".message-error").addClass("show");
        $('.form-page').addClass('input-error')
   }else if ($(this).val().length > 1){
    $('.form-page').removeClass('input-error');
        $(".message-error").removeClass("show");   }
})

